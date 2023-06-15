import axios from "axios";

export interface BookingData {
  booking_id: string;
  make: string;
  model: string;
  year: string;
  date: Date;
  customer_name: string;
  customer_number: string;
  customer_email: string;
  service_name: string;
  address: string;
}

export interface BookingError {
  error: string;
}

export function isBookingError(data: BookingData | BookingError) {
  return (data as BookingError).error !== undefined;
}

export async function getBookingData(
  bookingId: string,
  depth?: number
): Promise<BookingData | BookingError> {
  const request = await axios.get(
    "https://www.zohoapis.com/bookings/v1/json/getappointment",
    {
      params: {
        booking_id: bookingId,
      },
      headers: {
        Authorization: `Bearer ${process.env.ZOHO_ACCESS_TOKEN}`,
      },
    }
  );

  if (request.data.response.returnvalue.status == "failure")
    return { error: "Invalid request" };
  if (request.status == 401) {
    if (depth) return { error: "Couldn't fetch data" };
    await refreshToken();
    return await getBookingData(bookingId, 2);
  }

  const data = request.data.response.returnvalue;

  return {
    booking_id: bookingId,
    make: data["customer_more_info"].Make,
    model: data["customer_more_info"].Model,
    year: data["customer_more_info"].Year,
    customer_name: data.customer_name,
    date: new Date(data.customer_booking_start_time),
    customer_email: data.customer_email,
    customer_number: data.customer_contact_no,
    service_name: data.service_name,
    address: data["customer_more_info"].Address,
  };
}

export async function refreshToken() {
  return axios
    .post(
      `https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.ZOHO_REFRESH_TOKEN}&client_id=${process.env.ZOHO_CLIENT_ID}&client_secret=${process.env.ZOHO_CLIENT_SECRET}&grant_type=refresh_token`
    )
    .then((res) => {
      process.env.ZOHO_ACCESS_TOKEN =
        res.data.access_token || process.env.ZOHO_ACCESS_TOKEN;
    })
    .catch((error) => console.log(error));
}
