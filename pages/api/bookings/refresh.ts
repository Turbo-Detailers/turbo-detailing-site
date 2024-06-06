// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getBookingData, refreshToken } from "bin/zoho";
import { addBookingToFirestore } from "bin/firebase";
import { getAvailableBlocksForDay, getBusyData } from "bin/google";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { date } = JSON.parse(req.body);

  if (req.method != "POST" || !date)
    return res.status(405).json({ error: "method not allowed" });

  console.log("The date is", date);
  const timesAvailable = await getAvailableBlocksForDay(
    new Date(date),
    await getBusyData(new Date(date), 1),
    8,
    0,
    17,
    0,
    30,
    120
  );

  res.status(200).json({ timesAvailable });
}
