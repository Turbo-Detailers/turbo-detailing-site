import { User } from "next-auth";
import { firestore } from "../pages/api/auth/[...nextauth]";
import { BookingData, getBookingData, isBookingError } from "./zoho";
import { Timestamp } from "firebase-admin/firestore";

export interface ExoticBookingData {
  vehicles: {
    make: string;
    model: string;
    year: string;
    service_name: string;
  }[];
  date: Timestamp;
  address: string;
  userId?: string;
}
export interface ExoticBookingWithCustomerData {
  vehicles: {
    make: string;
    model: string;
    year: string;
    service_name: string;
  }[];
  date: Timestamp;
  address: string;
  userId?: string;
  name: string | undefined | null;
  email: string | undefined | null;
}

export async function getUserRole(
  userId: string
): Promise<"user" | "admin" | "maintenance" | "exotic"> {
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

export async function getExoticBookingDataFromFirestore(bookingId: string) {
  return firestore.collection("exotics").doc(bookingId).get();
}

export async function getAllExoticBookingsFromFirestore() {
  return firestore.collection("exotics").get();
}

export async function getSortedLimitedAmountOfExoticBookingsFromFirestore(
  limit?: number
) {
  var returnArr: ExoticBookingData[] = [];

  if (limit) {
    var snapshot = await firestore
      .collection("exotics")
      .orderBy("date", "desc")
      .limit(limit)
      .get();
    if (snapshot.empty) return [];

    snapshot.forEach((doc) =>
      returnArr.push(doc.data() as unknown as ExoticBookingData)
    );
    return returnArr;
  }

  (await firestore.collection("exotics").orderBy("date", "desc").get()).forEach(
    (doc) => returnArr.push(doc.data() as unknown as ExoticBookingData)
  );

  return returnArr;
}

export async function getExoticBookingDataWithCustomerInformation(
  limit?: number
) {
  var updatedBookingData: ExoticBookingWithCustomerData[] = [];

  const exoticBookingData =
    await getSortedLimitedAmountOfExoticBookingsFromFirestore(
      limit ? limit : undefined
    );

  for (const booking of exoticBookingData) {
    if (booking.userId) {
      var customerData = (await (
        await firestore.collection("users").doc(booking.userId).get()
      ).data()) as User;
      console.log(customerData);
      await updatedBookingData.push({
        name: customerData.name,
        email: customerData.email,
        ...booking,
      });
    } else {
      updatedBookingData.push({
        name: undefined,
        email: undefined,
        ...booking,
      });
    }
  }
  return updatedBookingData;
}
