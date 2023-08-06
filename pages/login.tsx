import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Gallery.module.scss";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();

  const { redirect } = router.query;
  var stringRedirect: string = "/login";

  if (Array.isArray(redirect)) stringRedirect = redirect.join("");
  else if (redirect) stringRedirect = redirect;

  if (session !== undefined && session !== null) {
    return (
      <div className={styles.main}>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className={`${styles.main} flex-column flex-center`}>
      Not signed in <br />
      <GoogleButton
        onClick={() =>
          signIn("google", {
            redirect: true,
            callbackUrl: stringRedirect,
          })
        }
      >
        Sign in with Google
      </GoogleButton>
    </div>
  );
}
