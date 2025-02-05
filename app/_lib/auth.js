import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { checkAdmin } from "./data-service";
import { redirect } from "next/navigation";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      //signIn -> authorize
      try {
        const existingGuest = await checkAdmin(user.email);
        console.log(existingGuest);
        if (!existingGuest) {
          return "/unauthorized";
        }
        return true;
      } catch {
        //false means error (to error page)
        return false;
      }
    },
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
