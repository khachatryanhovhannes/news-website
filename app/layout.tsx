import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/organisms";
import { BigBanner } from "@/components/atoms";

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
        <div className="min-h-screen w-full bg-white dark:bg-gray-950 text-text-primary-light dark:text-text-primary-dark">
          <div className="mx-auto w-[98%] lg:w-[90%] xl:w-[85%] bg-background-primary-light dark:bg-background-primary-dark">
            <BigBanner />
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
