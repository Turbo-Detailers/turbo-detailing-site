import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { decode } from "next-auth/jwt";
import Head from "next/head";
import { getAvailability } from "bin/google";
import { format } from "date-fns";
import { Fragment, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import Balancer from "react-wrap-balancer";

export default function Dashboard({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Account Dashboard - Turbo Detailers</title>
      </Head>
      <div className="w-full px-3 lg:px-5">
        <h1 className="text-4xl font-bold text-center text-center md:text-left">
          Hi, {user.name?.split(" ")[0]}!
        </h1>
        <h3 className="text-gray-400 text-center md:text-left">
          {format(new Date(), "eeee, MMMM do")}
        </h3>
        <hr className="my-6 border-neutral-600" />
        {user.role == "admin" ||
        user.role == "maintenance" ||
        user.role == "exotic" ? (
          <ExoticCustomer />
        ) : null}
      </div>
    </>
  );
}

function ExoticCustomer() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [availability, setAvailability] = useState(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Fragment>
      <h2 className="text-center md:text-left font-medium">
        <Balancer>
          Since you&apos;re a maintenance customer, you can plan your next
          service directly from here:
        </Balancer>
      </h2>
      <section className="flex flex-col lg:flex-row items-center gap-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setLoading(true);
            setDate(date);
          }}
          className="rounded-md"
        />
        {loading ? (
          <p>Loading availability...</p>
        ) : (
          <p className="text-red-200">Select a date to see available times.</p>
        )}
      </section>
    </Fragment>
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
