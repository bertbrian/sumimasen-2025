import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pamfuuctmarnncksxvym.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images//**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

export default withNextVideo(nextConfig, { folder: "video" });
