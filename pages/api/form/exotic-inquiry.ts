// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateExoticsInquiry } from "../../../bin/mailjet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    email = undefined,
    number = undefined,
    name = "Not Provided",
    notes,
  } = req.body;

  if (email == undefined || number == undefined)
    return res.status(400).json({ error: "Details missing" });

  if (req.method !== "POST")
    return res.status(400).json({ error: "No Gateway" });
  else {
    const request = generateExoticsInquiry({
      email: `${email}`,
      number: `${number}`,
      name: name.toString(),
      date: new Date(Date.now()).toTimeString(),
      notes: notes?.toString() || "Notes not provided",
    });

    await request
      .then((result) => {
        return res.status(200).json({ success: "Quote Request Sent" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({
          error:
            "Failed to send message, please try again or contact us directly at contact@turbodetailers.com",
        });
      });
  }
  //   return res.status(400).json({ error: "An error occurred" });
}
