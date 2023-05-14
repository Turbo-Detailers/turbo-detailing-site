import { signOut, useSession, signIn } from "next-auth/react";

export default function LogoutPage() {
const { data: session } = useSession();
  if (session !== undefined && session !== null) {
  signOut();
} else {
signIn()
}

  return <div>Logging you out...</div>;
}
