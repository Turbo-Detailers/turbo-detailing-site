import { linkUserToBooking } from "bin/firebase";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { decode } from "next-auth/jwt";
import { authOptions } from "./api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import Head from "next/head";
import { getAvailability } from "bin/google";

export default function Dashboard({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Account Dashboard - Turbo Detailers</title>
      </Head>
      <div>
        <h1 className="text-4xl">
          Hi, {user.name}! {new Date("2023-08-13T00:30:00Z").toDateString()}
        </h1>
      </div>
    </>
  );
}

export async function getServerSideProps({
  req,
  query,
}: GetServerSidePropsContext) {
  const sessionToken =
    req.cookies["__Secure-next-auth.session-token"] ||
    req.cookies["next-auth.session-token"];

  const decoded = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET || "",
  });

  if (!decoded)
    return {
      redirect: { permanent: false, destination: "/login?redirect=/dashboard" },
    };

  return {
    props: {
      user: decoded,
    },
  };
}
