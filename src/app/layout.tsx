// TODO: fix the font it's not working lol

import type { Metadata } from "next";
import "./globals.css";
import { TaskbarContextProvider } from "./TaskbarContext";

export const metadata: Metadata = {
  title: "D&D Campaign",
  description: "idk yet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <TaskbarContextProvider>
        <body className="font-windowsFont">{children}</body>
      </TaskbarContextProvider>
    </html>
  );
}
