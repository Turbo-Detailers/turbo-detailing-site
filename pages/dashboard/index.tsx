import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { decode } from "next-auth/jwt";
import Head from "next/head";
import { getAvailability } from "bin/google";
import { format } from "date-fns";

export default function Dashboard({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Account Dashboard - Turbo Detailers</title>
      </Head>
      <div className="w-full px-3 lg:px-5">
        <h1 className="text-4xl">Hi, {user.name?.split(" ")[0]}!</h1>
        <h3 className="text-gray-400">{format(new Date(), "eeee, MMMM do")}</h3>
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
