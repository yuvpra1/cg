import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cgssb.com.in'),
  title: "CGSSB - Chhattisgarh Staff Selection Board Notification & Jobs",
  description: "Your complete portal for CGSSB, CGPSC, Vyapam, Govt Jobs, Syllabus, Results, and Current Affairs in Chhattisgarh.",
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
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-TG7H8ER4HK" />
      </body>
    </html>
  );
}
