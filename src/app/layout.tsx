import { Title } from "@tremor/react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markdownify",
  description: "A great note taking app powered by markdown.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-slate-50 p-6 sm:p-10">
          <Title className="text-xl">Markdownify</Title>
        </header>
        {children}
      </body>
    </html>
  );
}
