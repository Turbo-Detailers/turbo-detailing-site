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

export async function isFree(dateTime: Date, sessionLength: number) {
  console.log(formatRFC3339(dateTime));
  const busyData = await getAvailability(
    dateTime,
    new Date(dateTime.getTime() + 1000 * 60 * 60 * 24 * 30 * 3)
  );

  return busyData["turboautodetailers@gmail.com"];
}

export async function getAvailableBlocksForDay(
  date: Date,
  busyData: CalendarBusyData
) {
  const availability = {};
  var prevAvailableTime = Date.now();

  if (busyData["turboautodetailers@gmail.com"].busy != undefined) {
    for (
      var i = 0;
      i < busyData["turboautodetailers@gmail.com"].busy.length;
      i++
    ) {}
  }
}
