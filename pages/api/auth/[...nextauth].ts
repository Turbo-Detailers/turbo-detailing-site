import NextAuth, { AuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter, initFirestore } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions: AuthOptions = {
  debug: true,
  logger: {
    error(code, metadata) {
      console.error(code, metadata);
    },
    warn(code) {
      console.warn(code);
    },
    debug(code, metadata) {
      console.debug(code, metadata);
    },
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // ...add more providers here
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID || "",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
      privateKey:
        process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n") || "",
    }),
  }),
  callbacks: {
    session: async ({ session, token, user }) => {
      session.user.id = user.id;
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) token.user = user;
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
