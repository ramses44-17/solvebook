import type { Metadata } from "next";
import "./globals.css";
import { SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appsidebar";
import Header from "@/components/header";
import {Suspense} from "react"
import Loader from "./loading";
import SessionContext from "@/context/sessioncontext";

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
        <SessionContext>
          <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header/>
        <Suspense fallback={<Loader size="large"/>}>
          {children}
        </Suspense>
      </SidebarInset>
    </SidebarProvider>
        </SessionContext>
      </body>
    </html>
  );
}
