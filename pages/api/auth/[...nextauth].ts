import NextAuth, { AuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter, initFirestore } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import { getUserRole } from "../../../bin/firebase";
import { CUSTOMER_ROLE } from "types/customers/BaseCustomer";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID || "",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
      privateKey:
        process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n") || "",
    }),
  }),
  callbacks: {
    session: async ({ session, token }) => {
      session.user.customer_id = token.id;
      session.user.role = token.role || CUSTOMER_ROLE.REGULAR;
      return session;
    },
    jwt: async ({ token, user, account }) => {
      if (user) token.id = user.id;
      if (account) token.role = await getUserRole(token.id);
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const firestore = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
  }),
});

export default NextAuth(authOptions);
