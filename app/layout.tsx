import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Karan Mhaswadkar | AI Engineer",
  description:
    "AI Engineer specializing in LLM applications, RAG systems, NLP, and scalable machine learning solutions. Explore projects, experience, and AI work.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "RAG",
    "NLP",
    "Karan Mhaswadkar",
  ],
   icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
