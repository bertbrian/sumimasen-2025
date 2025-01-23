import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

import { Montserrat } from "next/font/google";

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
      <body className="antialiased overflow-x-hidden min-h-screen font-sans grid grid-rows-[auto_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
