import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/organisms";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="min-h-screen bg-background-primary-light dark:bg-background-primary-dark">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
