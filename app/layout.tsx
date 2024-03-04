import type { Metadata } from "next";
import { Chivo_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SiteHeader from "@/components/ui/site-header";
import { SiteFooter } from "@/components/ui/site-footer";
import Top from "@/components/ui/top";

const chivoMono = Chivo_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dival Sehgal",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon-180x180.png"
        sizes="180x180"
      />
      <link rel="mask-icon" href="./assets" color="#FFFFFF" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/manifest.json" />
      <body
        className={cn(
          "min-h-screen bg-background bg-black dark:bg-primary-dark font-sans box-border antialiased",
          chivoMono.className
        )}
      >
        <div vaul-drawer-wrapper="">
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            {/* <Top /> */}
            <main className="flex-1 flex justify-center items-center">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
