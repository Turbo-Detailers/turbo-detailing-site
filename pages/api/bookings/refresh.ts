// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getBookingData, refreshToken } from "bin/zoho";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  getBookingData("TU-0001422");
  res.status(200).json({ error: "No Gateway" });
}
