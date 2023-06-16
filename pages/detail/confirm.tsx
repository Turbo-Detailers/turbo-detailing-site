import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { addBookingToFirestore } from "bin/firebase";
import GoogleButton from "react-google-button";

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { booking_id } = query;
  if (booking_id) {
    const booked = await addBookingToFirestore(booking_id.toString());
    if (!booked)
      return {
        props: {
          error:
            "There was an error linking your appointment to our servers, but your service has still been scheduled.",
        },
      };
    return { props: { booked: true } };
  }
  return {
    props: {
      error:
        "There was an error linking your appointment to our servers, but your service has still been scheduled.",
    },
  };
}

export default function ConfirmationPage({
  error,
  booked,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { booking_id } = router.query;
  return (
    <div>
      <div className="mx-auto max-w-xl py-8 prose prose-invert px-2 lg:prose-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            {booking_id ? "Success!" : "Error: No booking ID passed."}
          </h1>
        </div>
        {booking_id ? (
          <div className="blog-post [&>*]:mb-3 [&>*:last-child]:mb-0">
            {error
              ? error
              : "Your service has been booked with us. If you want to link your service to an account with us, you can do so by clicking the button below. This will also enable you to receive exclusive rates in the future and our proprietary maintenance plans!"}
          </div>
        ) : (
          "Error: No booking ID passed. Please try again. If our scheduling website sent you here, your appointment has been scheduled but was unable to be linked to your account."
        )}
        <div className="flex-row flex-center justify-center">
          {booked ? (
            <GoogleButton onClick={() => signIn("google")}>
              Sign in with Google
            </GoogleButton>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
