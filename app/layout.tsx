import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CG Knowledge - Chhattisgarh Career & Education Portal",
  description: "Your complete knowledge graph for CGSSB, CGPSC, Vyapam, Jobs, Syllabus, and Current Affairs in Chhattisgarh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 70px - 150px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
