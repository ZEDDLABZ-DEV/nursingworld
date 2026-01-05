import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Nursing World - NCLEX Preparation by Ramandeep Kaur",
  description: "Expert NCLEX-RN preparation courses taught by Ramandeep Kaur NCLEX-RN. Join thousands of successful nursing students and pass your NCLEX exam with confidence.",
  keywords: "NCLEX, NCLEX-RN, nursing education, Ramandeep Kaur, nursing exam preparation, nursing courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}




