import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./providers";
import localFont from "next/font/local";

const getSchwifty = localFont({
  src: "./assets/get_schwifty.ttf",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={getSchwifty.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
