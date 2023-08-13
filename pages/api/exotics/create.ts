import { getServerSession } from "next-auth/next";
import { authOptions, firestore } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { Timestamp } from "firebase-admin/firestore";
import { isFree } from "bin/google";

interface ExoticVehicle {
  make: string;
  model: string;
  year: number;
  service_name: string;
  completed: boolean;
}

interface CreateExoticData {
  vehicles: ExoticVehicle[];
  date: number | Date;
  user?: string;
  tempCode?: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(404).end();

  const session = await getServerSession(req, res, authOptions);
  if (session?.user.role == "admin" || session?.user.role == "exotic") {
    try {
      // Signed in as Admin
      const data = req.body.data as unknown as CreateExoticData;

      if (session.user.role == "exotic") data.user = session.user.id;

      data.date = new Date(data.date);

      return res.status(200).json(await isFree(new Date()));

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
