import { useRouter } from "next/router";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { decode } from "next-auth/jwt";
import { linkUserToBooking } from "bin/firebase";

export async function getServerSideProps({
  req,
  query,
}: GetServerSidePropsContext) {
  const sessionToken = req.cookies["next-auth.session-token"];
  const { booking_id } = query;
  const decoded = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET || "",
  });
  if (!decoded || !booking_id) return { props: { completed: false } };

  return {
    props: {
      completed: await linkUserToBooking(decoded.id, booking_id.toString()),
    },
  };
}

export default function ConfirmationPage({
  completed,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { booking_id } = router.query;
  return (
    <div className="mx-auto max-w-xl py-8 prose prose-invert px-2 lg:prose-xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">
          {completed
            ? "Success! Your account is linked with your detail."
            : "Error."}
        </h1>
      </div>
      {booking_id ? (
        <div className="blog-post [&>*]:mb-3 [&>*:last-child]:mb-0">
          {!completed
            ? "There was an error linking this service with your account. It is possible someone has already linked the service."
            : "Successfully linked, be on the look out for deals!"}
        </div>
      ) : (
        "Error: No booking ID passed. Please try again. If our scheduling website sent you here, your appointment has been scheduled but was unable to be linked to your account."
      )}
    </div>
  );
}
