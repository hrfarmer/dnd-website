"use client";

import React, { useContext } from "react";
import StartMenuIcon from "./StartMenuIcon";
import TaskbarDivider from "./TaskbarDivider";
import { ActiveAppContextType, TaskbarContext } from "../TaskbarContext";
import TaskbarButton from "./TaskbarButton";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Taskbar() {
  const { activeApp, setActiveApp } =
    useContext<ActiveAppContextType>(TaskbarContext);
  return (
    <div className="flex bg-[#c3c6ca] h-12 w-svw fixed bottom-0 border-t-2 border-t-white items-center px-2">
      <div className="flex justify-between items-center h-full w-full">
        <div className="flex items-center px-2 h-full">
          <StartMenuIcon />
          <TaskbarDivider />
          <TaskbarButton id="notion" />
          <TaskbarButton id="notepad" />
        </div>
        <div className="flex w-full h-full items-center flex-row-reverse">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
