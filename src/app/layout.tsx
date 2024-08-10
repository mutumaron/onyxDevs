import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./scrollbar.css";
import NavBar from "@/components/Layout/NavBar";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/CustomUI/WhatsAppBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Onyx Developers",
  description:
    "We are a web & mobile developing company that specializes with fast,mordern and an aesthetic look on our projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="overflow-hidden px-12 lg:px-36">{children}</main>
        <Toaster />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
