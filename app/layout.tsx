// app/layout.tsx

import type { Metadata } from "next";
import { Geist } from "next/font/google"; // Используем только основной шрифт, моноширинный не нужен для body
import "./globals.css";

// ✅ Настраиваем основной шрифт
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// ✅ Обновляем метаданные для вашего сайта
export const metadata: Metadata = {
  title: "Sparkling — Digital Studio",
  description:
    "A digital studio designing and building bold brands and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ✅ Применяем класс шрифта и сглаживание */}
      <body
        className={`${geistSans.variable} font-sans antialiased bg-[#0A0E13]`}
      >
        {/* ✅ 'children' — это ваша текущая страница, обернутая в <main> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
