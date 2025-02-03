import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { checkAdmin } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async authorized({ auth, request }) {
      //if auth.user exist === true, else false shortcut below
      const existingAdmin = await checkAdmin(auth?.user.email);
      if (!auth?.user || !existingAdmin) return false;

      return true;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
