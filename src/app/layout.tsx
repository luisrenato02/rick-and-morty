import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ReactQueryClient } from "./ReactQueryClient";
import StyledComponentsRegistry from "./providers";

const getSchwifty = localFont({
  src: "./assets/get_schwifty.ttf",
});

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
      <ReactQueryClient>
        <StyledComponentsRegistry>
          <body className={getSchwifty.className}>{children}</body>
        </StyledComponentsRegistry>
      </ReactQueryClient>
    </html>
  );
}
