import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { decode } from "next-auth/jwt";
import Head from "next/head";
import { format } from "date-fns";
import { Fragment, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import Balancer from "react-wrap-balancer";
import useSWR from "swr";
import Link from "next/link";

const fetcher = async (url: string, date: Date) => {
  return fetch(url, { body: JSON.stringify({ date }), method: "POST" }).then(
    (res) => res.json()
  );
};

function useDate(date: Date) {
  const { data, error, isLoading } = useSWR(
    `/api/bookings/refresh?date=${date}`,
    (url) => fetcher(url, date)
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export default function Dashboard({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Account Dashboard - Turbo Detailers</title>
      </Head>
      <div className="w-full px-3 lg:px-5">
        <h1 className="text-4xl font-bold text-center md:text-left">
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
            setDate(date);
            // useDate(date || new Date());
          }}
          className="rounded-md"
        />
        {date ? (
          <AvailableTimes date={date} />
        ) : (
          <p className="text-red-200">Select a date to see available times.</p>
        )}
      </section>
    </Fragment>
  );
}

function AvailableTimes(props: { date: Date | undefined }) {
  const { data, isLoading, isError } = useDate(props.date || new Date());

  if (isLoading) return <p>Loading availability...</p>;
  else if (isError)
    return (
      <p>
        Error occured while refreshing data. Try again, and if issue persists,
        reach out directly to book: <Link href="/contact">contact us</Link>
      </p>
    );

  console.log(data);
  return <AvailableTimeSelector data={data.timesAvailable} />;
}

function AvailableTimeSelector(props: { data: string[] }) {
  if (props.data.length > 0) {
    return (
      <div>
        {props.data.map((date) => (
          <div key={date}>{format(new Date(date), "p")}</div>
        ))}
      </div>
    );
  } else {
    return <p>No available times for that day, please try a different date.</p>;
  }
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
