import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_NAME, APP_HEADLINE, APP_DESCRIPTION } from "@/utils/appInfo";
import Header from "@/components/Header/Header";

import "./globals.scss";
import "@/styles/abstracts/variables.scss";
import "@/styles/base/reset.scss";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: APP_NAME + " | " + APP_HEADLINE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
