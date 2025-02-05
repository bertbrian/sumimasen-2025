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
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      //jalan habis setelah authorize.. proses ap aj saat signing
      try {
        const existingGuest = await checkAdmin(user.email);

        console.log(existingGuest);
        if (!existingGuest) return false;
        return true;
      } catch {
        return false;
      }
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
