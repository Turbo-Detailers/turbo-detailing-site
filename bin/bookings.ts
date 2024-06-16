import { BaseBooking, DETAILING_TYPE } from "types/bookings/BaseBooking";
import { calendar, getBusyData } from "./google";
import { formatRFC3339 } from "date-fns";

export async function newBooking(bookingData: BaseBooking) {
  const busy = await getBusyData(bookingData.date, bookingData.length_minutes);

  if (busy["turboautodetailers@gmail.com"].busy?.length) {
    console.log(busy["turboautodetailers@gmail.com"].busy);
    return {
      error:
        "We are busy at that time. Please select a different time and try again.",
    };
  }

  console.log(await calendar.calendarList.list());

  // not busy, we can create the booking
  await calendar.events.insert(
    {
      calendarId: "turboautodetailers@gmail.com",
      requestBody: {
        location: bookingData.address,
        summary: `${bookingData.type} Detail for ${bookingData.vehicles.join(
          ", "
        )}`,
        start: {
          dateTime: formatRFC3339(bookingData.date),
        },

        end: {
          dateTime: formatRFC3339(
            new Date(
              bookingData.date.getTime() +
                1000 * 60 * bookingData.length_minutes
            )
          ),
        },
      },
    },
    function (err, event) {
      if (err) {
        console.log(
          "There was an error contacting the Calendar service: " + err
        );
        return;
      }
      //   console.log("Event created:", event);
    }
  );
}

newBooking({
  date: new Date(),
  maintenance: true,
  type: DETAILING_TYPE.EXTERIOR,
  length_minutes: 60,
  price: 120,
  address: "316 12th St, Moline IL, 61265",
  customer_id: "1",
  vehicles: [{ make: "Toyota", model: "Rav4", year: 2017 }],
});
