import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inmobiliaria Riri",
  description: "Encontrá tu próxima casa o departamento con Inmobiliaria Riri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geist.className} flex min-h-screen flex-col bg-riri-light text-slate-800 dark:bg-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}