// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { generateRequest } from "../../../bin/mailjet";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    email = undefined,
    number = undefined,
    name = "Not Provided",
    make = undefined,
    model = undefined,
    year = undefined,
    condition,
    notes,
  } = req.body;

  if (
    email == undefined ||
    number == undefined ||
    make == undefined ||
    model == undefined ||
    year == undefined
  )
    return res.status(400).json({ error: "Details missing" });

  if (req.method !== "POST")
    return res.status(400).json({ error: "No Gateway" });
  else {
    const request = generateRequest({
      contact: `${number} (${email})`,
      name: name.toString(),
      date: new Date(Date.now()).toTimeString(),
      make: make.toString(),
      model: model.toString(),
      year: year.toString(),
      condition: condition?.toString() || "Condition not provided",
      notes: notes?.toString() || "Notes not provided",
    });

    request
      .then((result) => {
        console.log(result.body);
        res.status(200).json({ success: "Quote Request Sent" });
      })
      .catch((err) => {
        return res.status(400).json({
          error:
            "Failed to send message, please try again or contact us directly at contact@turbodetailers.com",
        });
      });
  }
  return res.status(400).json({ error: "An error occurred" });
}
