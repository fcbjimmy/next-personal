import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Providers";
import ToastProvider from "./components/toast.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jimmy's personal website",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray dark:selection:bg-gray-800`}
      >
        <Provider>
          <ToastProvider>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </ToastProvider>
        </Provider>
      </body>
    </html>
  );
}
