// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getBookingData, refreshToken } from "bin/zoho";
import { addBookingToFirestore } from "bin/firebase";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ error: "No Gateway" });
}
