import { getServerSession } from "next-auth/next";
import { authOptions, firestore } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { Timestamp } from "firebase-admin/firestore";

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
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(404).end();

  const session = await getServerSession(req, res, authOptions);
  if (session?.user.role == "admin" || session?.user.role == "exotic") {
    // Signed in as Admin
    const data = req.body.data as unknown as CreateExoticData;
    data.date = new Date(data.date);

    await firestore.collection("exotics").add(data);
    res.status(200).json({ result: "completed" });
  } else {
    // Not Authorized
    res.status(401);
  }
  res.end();
};
