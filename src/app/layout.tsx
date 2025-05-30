import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sk = localFont({
  src: "./fonts/Salih Kizilkaya - SK Payidar Regular.ttf",
  variable: "--font-sk",
});
const Megantz = localFont({
  src: "./fonts/Megant‚-Personal-Use.ttf",
  variable: "--font-megantz",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Payment Details",
  keywords: ["payment", "details", "bank", "account", "copy", "pay"],
  description: "Redhorn's payment details for easy access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sk.variable} ${Megantz.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
