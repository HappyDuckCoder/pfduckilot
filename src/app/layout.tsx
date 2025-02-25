import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingNavbar from "@/components/ui/FloatingNavbar";
import Head from "next/head";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Duck",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Duckilot - Full-Stack Developer</title>
        <meta
          name="description"
          content="Experienced Full-Stack Web Developer proficient in frontend, backend, and database management."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className="overflow-x-hidden font-sans">
        <FloatingNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
