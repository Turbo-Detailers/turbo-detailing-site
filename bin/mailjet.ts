import Mailjet from "node-mailjet";
import Handlebars from "handlebars";

import fs from "fs";
import { resolve, join } from "path";

const templateDir = resolve(process.cwd(), "templates");
const templateFile = join(templateDir, "formEmail.hbs");
const customerExoticInquiryFile = join(templateDir, "exoticInquiryEmail.hbs");
const exoticInquiryConfirmationFile = join(
  templateDir,
  "exoticInquiryConfirmationEmail.hbs"
);

const source = fs.readFileSync(templateFile, "utf-8");

const template = Handlebars.compile(source);
const customerExoticInquiryTemplate = Handlebars.compile(
  fs.readFileSync(customerExoticInquiryFile, "utf-8")
);

const exoticInquiryConfirmationTemplate = Handlebars.compile(
  fs.readFileSync(exoticInquiryConfirmationFile, "utf-8")
);

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || "",
  process.env.MAILJET_PRIVATE_KEY || ""
);

interface RequestReceivers {
  From: {
    Email: string;
    Name: string;
  };
  To: {
    Email: string;
    Name: string;
  }[];
}

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

function generateFromTo(
  customerEmail: string,
  customerName: string
): RequestReceivers {
  return {
    From: {
      Email: "contact@turbodetailers.com",
      Name: "Turbo Detailers",
    },
    To: [
      {
        Email: customerEmail,
        Name: customerName,
      },
    ],
  };
}

export function generatePCRequest(formData: {
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

export function generateExoticsInquiry(formData: {
  name: string;
  date: string;
  notes: string;
  email: string;
  number: string;
}) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        ...FromTo,
        Subject: `New Exotic Detailing Inquiry!`,
        TextPart: `${formData.name} is requesting exotic Detailing for their cars`,
        HTMLPart: exoticInquiryConfirmationTemplate({
          name: formData.name,
          date: formData.date,
          notes: formData.notes,
          email: formData.email,
          number: formData.number,
        }),
      },
    ],
  });

  const customerRequest = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        ...generateFromTo(formData.email, formData.name),
        Subject: `We Received Your Exotic Detailing Inquiry!`,
        TextPart: `We'll respond within 2 days.`,
        HTMLPart: customerExoticInquiryTemplate({
          name: formData.name,
          date: formData.date,
          notes: formData.notes,
          email: formData.email,
          number: formData.number,
        }),
      },
    ],
  });
  return Promise.all([request, customerRequest]);
}
