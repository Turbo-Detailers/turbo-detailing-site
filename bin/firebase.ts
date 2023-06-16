import { firestore } from "../pages/api/auth/[...nextauth]";
import { getBookingData, isBookingError } from "./zoho";

export async function getUserRole(
  userId: string
): Promise<"user" | "admin" | "maintenance"> {
  if (!userId) return "user";

  const req = await (
    await firestore.collection("users").doc(userId).get()
  ).data();

  return req?.role || "user";
}

export async function addBookingToFirestore(bookingId: string) {
  const data = await getBookingData(bookingId);
  console.log(data);
  if (isBookingError(data)) return false;
  await firestore.collection("details").doc(bookingId).set(data);
  return true;
}
