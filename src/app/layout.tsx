// TODO: fix the font it's not working lol

import type { Metadata } from "next";
import "./globals.css";
import { TaskbarContext, TaskbarContextProvider } from "./TaskbarContext";
import { SetStateAction, useState, Dispatch } from "react";

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
      <TaskbarContextProvider>
        <body className="font-windowsFont">{children}</body>
      </TaskbarContextProvider>
    </html>
  );
}
