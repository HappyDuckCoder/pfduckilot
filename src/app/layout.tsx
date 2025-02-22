import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
// import FloatingNavbar from "@/components/ui/FloatingNavbar";

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
      <body className="overflow-x-hidden font-sans">
        {/* <FloatingNavbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
