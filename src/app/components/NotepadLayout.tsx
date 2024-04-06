import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";

export default function NotepadLayout() {
  return (
    <div className="w-full h-[calc(100vh-48px)] flex justify-center items-center flex-col bg-blue-500 overflow-hidden">
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <div>ya</div>
      </SignedIn>
    </div>
  );
}
