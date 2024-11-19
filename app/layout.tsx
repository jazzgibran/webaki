import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"],
variable: '--font-mont',
 });


export const metadata: Metadata = {
  title: "Aki Max Samarinda",
  description: "Toko Aki Nomor 1 di Samarinda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.variable}`}>{children}</body>
    </html>
  );
}
