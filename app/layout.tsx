import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
};

import Breadcrumbs from "@/components/Breadcrumbs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TG7H8ER4HK"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TG7H8ER4HK');
          `}
        </Script>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 70px - 150px)' }}>
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
