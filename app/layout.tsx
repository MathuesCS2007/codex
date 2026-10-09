import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "../components/hero";
import "./css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codex Suporte & Web",
  description: "Site de suporte para uso pessoal e profissional",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header>
          <Hero />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
