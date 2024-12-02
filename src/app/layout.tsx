import type { Metadata } from "next";
import "./globals.css";
import {Suspense} from "react"
import Loader from "./loading";

export const metadata: Metadata = {
  title: "Solvebook",
  description: "Solvebook is a social media based on problem-solution model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loader size="large"/>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
