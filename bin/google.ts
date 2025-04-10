import { google } from "googleapis";
import { formatRFC3339 } from "date-fns";
import { newBooking } from "./bookings";
import { DETAILING_TYPE } from "types/bookings/BaseBooking";

interface CalendarBusyData {
  "turboautodetailers@gmail.com": {
    busy?: { start: string; end: string }[];
  };
}

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

const GOOGLE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY?.replace(
  /\\n/gm,
  "\n"
);

const jwtClient = new google.auth.JWT(
  GOOGLE_CLIENT_EMAIL,
  undefined,
  GOOGLE_PRIVATE_KEY,
  SCOPES
);

export const calendar = google.calendar({
  version: "v3",
  auth: jwtClient,
});

export async function getAvailability(dateMin: Date, dateMax: Date) {
  const request = await calendar.freebusy.query({
    requestBody: {
      // request body parameters
      items: [
        {
          id: "turboautodetailers@gmail.com",
        },
      ],
      calendarExpansionMax: 3,
      timeMin: formatRFC3339(dateMin),
      timeMax: formatRFC3339(dateMax),
      timeZone: "GMT-5",
    },
  });

  return request.data.calendars as unknown as CalendarBusyData;
}

export async function getBusyData(
  dateTime: Date,
  sessionLength: number
): Promise<CalendarBusyData> {
  const busyData = await getAvailability(
    dateTime,
    new Date(dateTime.getTime() + 1000 * 60 * sessionLength)
  );

  console.log(busyData);

  return busyData;
}

export async function getAvailableBlocksForDay(
  date: Date,
  busyData: CalendarBusyData,
  startHour: number,
  startMin: number,
  endHour: number,
  endMin: number,
  apptInterval: number,
  apptLength: number
) {
  var temp = new Date();

  const rightNow = Date.now();

  const availability = [];
  var iteratingTime = date;

  iteratingTime.setUTCHours(startHour + 5, startMin, 0, 0);

  const maxTime = new Date(iteratingTime.getTime());
  maxTime.setUTCHours(endHour + 5, endMin, 0, 0);

  while (iteratingTime.getTime() <= maxTime.getTime()) {
    var appointmentEndDate = new Date(
      iteratingTime.getTime() + 1000 * 60 * apptLength
    );

    if (
      busyData["turboautodetailers@gmail.com"].busy != undefined &&
      busyData["turboautodetailers@gmail.com"].busy.length
    ) {
      for (
        var i = 0;
        i < busyData["turboautodetailers@gmail.com"].busy.length;
        i++
      ) {
        if (
          dateRangeOverlaps(
            iteratingTime.getTime(),
            appointmentEndDate.getTime(),
            new Date(
              busyData["turboautodetailers@gmail.com"].busy[i].start
            ).getTime(),
            new Date(
              busyData["turboautodetailers@gmail.com"].busy[i].end
            ).getTime()
          ) ||
          iteratingTime.getTime() <= rightNow
        )
          break;
        availability.push(new Date(iteratingTime));
      }
    } else {
      if (iteratingTime.getTime() > rightNow)
        availability.push(
          new Date(iteratingTime).toLocaleString("en-US", {
            timeZone: "America/Chicago",
          })
        );
    }
    iteratingTime = new Date(
      iteratingTime.getTime() + 1000 * 60 * apptInterval
    );
  }

  return availability;
}

// Taken from https://stackoverflow.com/questions/22784883/check-if-more-than-two-date-ranges-overlap on Jun 4, 2024
export function dateRangeOverlaps(
  a_start: number,
  a_end: number,
  b_start: number,
  b_end: number
) {
  if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
  if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
  if (b_start < a_start && a_end < b_end) return true; // a in b
  return false;
}
