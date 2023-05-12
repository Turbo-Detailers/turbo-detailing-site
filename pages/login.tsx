import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/Gallery.module.scss";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={styles.main}>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className={styles.main}>
      Not signed in <br />
      <button onClick={() => signIn("google")}>Sign in</button>
    </div>
  );
}
