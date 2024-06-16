import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: BaseCustomer & DefaultSession["user"];
  }
}

import "next-auth/jwt";
import { BaseCustomer, CUSTOMER_ROLE } from "./customers/BaseCustomer";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    role: CUSTOMER_ROLE;
    id: string;
  }
}
