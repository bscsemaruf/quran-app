import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "./context/SettingContext";

import { Amiri, Scheherazade_New } from "next/font/google";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-scheherazade",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quran App",
    template: "%s | Quran App",
  },
  description: "Modern Quran reading application",
  keywords: ["Quran", "Islam", "Quran App", "Arabic Quran", "Bangla Quran"],
  authors: [{ name: "Maruf Hosen" }],
  icons: {
    icon: "/holy-quran-logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable}
    ${scheherazade.variable}`}
    >
      <body className="min-h-screen bg-[#0b0f14] text-gray-200 antialiased">
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
