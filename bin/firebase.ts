import { firestore } from "../pages/api/auth/[...nextauth]";
import { BookingData, getBookingData, isBookingError } from "./zoho";

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

export async function linkUserToBooking(userId: string, bookingId: string) {
  const data = (await (
    await getBookingDataFromFirestore(bookingId)
  ).data()) as unknown as BookingData;
  if (data.userId) return false;
  await firestore
    .collection("details")
    .doc(bookingId)
    .update({ userId: userId });
  await firestore
    .collection("users")
    .doc(userId)
    .collection("details")
    .doc(bookingId)
    .set({ linked: true });
  return true;
}

export async function getBookingDataFromFirestore(bookingId: string) {
  return firestore.collection("details").doc(bookingId).get();
}

export async function getAllBookingsFromFirestore() {
  return firestore.collection("details").get();
}

export async function getSortedLimitedAmountOfBookingsFromFirestore(
  limit?: number
) {
  var returnArr: BookingData[] = [];

  if (limit) {
    var snapshot = await firestore
      .collection("details")
      .orderBy("date", "desc")
      .limit(limit)
      .get();
    if (snapshot.empty) return [];

    snapshot.forEach((doc) =>
      returnArr.push(doc.data() as unknown as BookingData)
    );
    return returnArr;
  }

  (await firestore.collection("details").orderBy("date", "desc").get()).forEach(
    (doc) => returnArr.push(doc.data() as unknown as BookingData)
  );

  return returnArr;
}
