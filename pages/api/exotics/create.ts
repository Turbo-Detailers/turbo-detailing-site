import { getServerSession } from "next-auth/next";
import { authOptions, firestore } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { Timestamp } from "firebase-admin/firestore";
import { getBusyData } from "bin/google";
import { CUSTOMER_ROLE } from "types/customers/BaseCustomer";

interface ExoticVehicle {
  make: string;
  model: string;
  year: number;
  service_name: string;
  completed: boolean;
}

interface CreateExoticData {
  vehicles: ExoticVehicle[];
  date: number | Date | string;
  user?: string;
  tempCode?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(404).end();

  const session = await getServerSession(req, res, authOptions);
  if (
    session?.user.role == CUSTOMER_ROLE.ADMIN ||
    session?.user.role == CUSTOMER_ROLE.EXOTIC
  ) {
    try {
      // Signed in as Admin
      const data = req.body.data as unknown as CreateExoticData;

      if (session.user.role == CUSTOMER_ROLE.EXOTIC)
        data.user = session.user.customer_id;

      data.date = new Date(data.date);

      if (data.date.getTime() < Date.now())
        return res.status(400).json({ error: "Date cannot be in the past" });

      return res.status(200).json(await getBusyData(data.date, 10));

      if (!data.date) throw new Error("Missing a valid date.");
      if (!data.vehicles) throw new Error("Missing vehicles.");
      if (!data.tempCode && !data.user)
        throw new Error("Missing required user fields.");

      await firestore.collection("exotics").add(data);
      res.status(200).json({ result: "completed" });
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      res.status(400).json({ error: message });
    }
  } else {
    // Not Authorized
    res.status(401).json({
      error: "You are not authorized. Please sign in to an account that is.",
    });
  }
  res.end();
};
