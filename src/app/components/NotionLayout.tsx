import React from "react";
import { SignedIn, SignIn, UserButton, SignedOut } from "@clerk/nextjs";

export default function NotionLayout() {
  return (
    <div className="w-full h-[calc(100vh-48px)] flex justify-center items-center flex-col bg-red-500 overflow-hidden">
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <div>ya</div>
      </SignedIn>
    </div>
  );
}
