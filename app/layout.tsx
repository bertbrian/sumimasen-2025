import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import WhatsAppSide from "@/app/components/ui/WhatsappSide";
import Footer from "./components/shared/footer";
import Header from "./components/shared/header";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sumimasen Tetrajaya Indonesia",
    default: "Sumimasen Tetrajaya Indonesia | Official Website",
  },
  description:
    "PT Sumimasen Tetrajaya Indonesia is a trusted distributor of ISO & AKL certified health protection. Dedicated to quality and safety. #BeSafeorBeSorry",
  keywords: [
    "Sumimasen",
    "Sumimasen Tetrajaya Indonesia",
    "Health Protection",
    "Condoms Indonesia",
    "Safety",
    "AKL Certified",
    "Condom",
    "Kondom",
  ],
  openGraph: {
    title: "Sumimasen Tetrajaya Indonesia",
    description:
      "Your trusted partner for high-quality, certified health protection products.",
    url: "https://www.sumimasen.id",
    siteName: "Sumimasen",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        montserrat.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppSide />
      </body>
    </html>
  );
}
