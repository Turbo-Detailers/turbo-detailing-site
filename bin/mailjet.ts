import Mailjet from "node-mailjet";
import Handlebars from "handlebars";

import fs from "fs";
import { resolve, join } from "path";

const templateDir = resolve(process.cwd(), "templates");
const templateFile = join(templateDir, "formEmail.hbs");

const source = fs.readFileSync(templateFile, "utf-8");

const template = Handlebars.compile(source);

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || "",
  process.env.MAILJET_PRIVATE_KEY || ""
);

const FromTo = {
  From: {
    Email: "contact@turbodetailers.com",
    Name: "Turbo Detailers",
  },
  To: [
    {
      Email: "turboautodetailers@gmail.com",
      Name: "Dhairya",
    },
  ],
};

export function generateRequest(formData: {
  name: string;
  date: string;
  make: string;
  model: string;
  year: string;
  condition: string;
  notes: string;
  contact: string;
}) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        ...FromTo,
        Subject: `New Paint Correction Request for ${formData.year} ${formData.make} ${formData.model}!`,
        TextPart: `${formData.name} is requesting a Paint Correction quote for a ${formData.year} ${formData.make} ${formData.model}`,
        HTMLPart: template({
          name: formData.name,
          date: formData.date,
          make: formData.make,
          model: formData.model,
          year: formData.year,
          condition: formData.condition,
          notes: formData.notes,
          contact: formData.contact,
        }),
      },
    ],
  });
  return request;
}
