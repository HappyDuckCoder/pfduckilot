import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingNavbar from "@/components/ui/FloatingNavbar";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Duckilot",
  description: "Duckilot Portfolio and Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/icons/coffee.svg" />
      </head>
      <body className="overflow-x-hidden font-sans">
        <FloatingNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
