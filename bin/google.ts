import { google } from "googleapis";
import { formatRFC3339 } from "date-fns";

interface CalendarBusyData {
  primary: {
    busy?: Date[];
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
      timeMax: formatRFC3339(new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)),
      timeMin: formatRFC3339(new Date()),
      timeZone: "GMT-5",
    },
  });

  return request.data;
}

export async function isFree(dateTime: Date) {
  return getAvailability(new Date(), new Date());
}
