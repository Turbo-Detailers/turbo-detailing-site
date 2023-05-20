import { firestore } from "../pages/api/auth/[...nextauth]";

export async function getUserRole(
  userId: string
): Promise<"user" | "admin" | "maintenance"> {
  if (!userId) return "user";

  const req = await (
    await firestore.collection("users").doc(userId).get()
  ).data();

  return req?.role || "user";
}
