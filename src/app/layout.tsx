import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/context/ThemeContext'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahsan Raza | Networking / Full Stack Developer / Cybersecurity Learner",
  description: "Ahsan Raza Baloch is a Computer Science graduate passionate about web application development, LLM integration, networking, and cybersecurity. He actively builds innovative digital solutions, experiments with AI-powered tools, and strengthens his expertise in secure and scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
      {children}
    </ThemeProvider>
      </body>
    </html>
  );
}
