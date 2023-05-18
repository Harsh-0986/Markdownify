import { Col, Grid, Text, Title } from "@tremor/react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markdownify",
  description: "A great note taking app powered by markdown.",
  manifest: "/manifest.json",
  "apple-touch-icon": "/icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-auto h-[100vh]`}>
        <header className="bg-slate-100 p-6 sm:p-10">
          <Link href="/">
            <Title className="text-xl">Markdownify</Title>
          </Link>
        </header>
        {children}
        <footer className="sticky bg-slate-100 py-8 px-24 top-[100vh] w-[100vw]">
          <Grid numCols={1} numColsLg={2}>
            <Col>
              <Title>Markdownify</Title>
            </Col>
            <Col>
              <Text className="text-lg">
                New to markdown! Here's a{" "}
                <Link
                  className="text-blue-500 hover:text-blue-700"
                  href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                >
                  cheatsheet!
                </Link>
              </Text>
              <Text>
                Made by <Link href="htttps://harshshah.codes">Harsh Shah</Link>
              </Text>
            </Col>
          </Grid>
        </footer>
      </body>
    </html>
  );
}
