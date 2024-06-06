import { google } from "googleapis";
import { formatRFC3339 } from "date-fns";

interface CalendarBusyData {
  "turboautodetailers@gmail.com": {
    busy?: { start: string; end: string }[];
  };
}

const SCOPES = [
  "https://www.googleapis.com/auth/calendar.readonly",
  "https://www.googleapis.com/auth/calendar",
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

const calendar = google.calendar({
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
    new Date(dateTime.getTime() + 1000 * 60 * 60 * 24 * sessionLength)
  );

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
  const rightNow = new Date();

  const availability = [];
  var currentTime = date;

  currentTime.setHours(startHour, startMin, 0, 0);

  const maxTime = new Date(currentTime.getTime());
  maxTime.setHours(endHour, endMin, 0, 0);

  while (currentTime.getTime() <= maxTime.getTime()) {
    var appointmentEndDate = new Date(
      currentTime.getTime() + 1000 * 60 * apptLength
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
            currentTime.getTime(),
            appointmentEndDate.getTime(),
            new Date(
              busyData["turboautodetailers@gmail.com"].busy[i].start
            ).getTime(),
            new Date(
              busyData["turboautodetailers@gmail.com"].busy[i].end
            ).getTime()
          ) ||
          currentTime.getTime() <= rightNow.getTime()
        ) {
          console.log(
            "Busy",
            currentTime.toLocaleDateString() +
              " " +
              currentTime.toLocaleTimeString(),
            "to",
            appointmentEndDate.toLocaleDateString() +
              " " +
              appointmentEndDate.toLocaleTimeString()
          );
          break;
        } else {
          console.log(
            "Free",
            currentTime.toLocaleDateString() +
              " " +
              currentTime.toLocaleTimeString(),
            "to",
            appointmentEndDate.toLocaleDateString() +
              " " +
              appointmentEndDate.toLocaleTimeString()
          );

          availability.push(new Date(currentTime));
        }
      }
    } else {
      if (currentTime.getTime() > rightNow.getTime())
        availability.push(
          new Date(currentTime).toLocaleString("America/Chicago")
        );
    }
    currentTime = new Date(currentTime.getTime() + 1000 * 60 * apptInterval);
  }

  return availability;
}

// Taken from https://stackoverflow.com/questions/22784883/check-if-more-than-two-date-ranges-overlap on Jun 4, 2024
function dateRangeOverlaps(
  a_start: number,
  a_end: number,
  b_start: number,
  b_end: number
) {
  if (a_start < b_start && b_start < a_end) return true; // b starts in a
  if (a_start < b_end && b_end < a_end) return true; // b ends in a
  if (b_start < a_start && a_end < b_end) return true; // a in b
  return false;
}
