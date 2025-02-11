import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { APP_NAME, APP_HEADLINE, APP_DESCRIPTION } from "@/utils/appInfo";
import Header from "@/components/Header/Header";

import "./globals.scss";
import "@/styles/abstracts/variables.scss";
import "@/styles/base/reset.scss";
import Footer from "@/components/Footer/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  weight: ["400"],
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
      <body className={bebasNeue.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
