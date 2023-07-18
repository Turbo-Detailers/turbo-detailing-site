import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return res.status(404).end();
  const session = await getServerSession(req, res, authOptions);
  if (session?.user.role == "admin") {
    // Signed in as Admin
  } else {
    // Not Authorized
    res.status(401);
  }
  res.end();
};
