import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
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
  icons: {
    icon: '/icon.jpg',
  },
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
