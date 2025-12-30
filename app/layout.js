import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import FirstPopUp from "./_components/FirstPopUp";
import Head from "next/head";

import { Montserrat } from "next/font/google";
import WhatsAppSide from "./_components/WhatsAppSide";
import productLinks from "@/app/db/productLinks.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    template: "%s / Sumimasen",
    default: "Sumimasen Tetrajaya Indonesia",
  },
  description: "created at 15/01/2025 by Albert Brian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <Head>
        {Object.values(productLinks).map((item) => (
          <link key={item.url} rel="preload" as="image" href={item.url} />
        ))}
      </Head>
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden font-sans antialiased">
        <WhatsAppSide />
        <Header />
        <main>
          {/* <FirstPopUp /> */}
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
