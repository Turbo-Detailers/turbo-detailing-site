// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { addBookingToFirestore } from "bin/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(400).json({ error: "No Gateway" });

  //   const { booking_id } = req.query;
  const { booking_id } = req.body;
  //   const session = await getSession({ req });
  //   const userId = session?.user.id;
  //   console.log(userId);
  console.log(booking_id);
  if (Array.isArray(booking_id) || booking_id == undefined)
    return res.status(400).json({ error: "Incorrectly formatted request." });

  await addBookingToFirestore(booking_id.toString());
  return res.status(200).json({ message: "Success! Booking added." });
}
