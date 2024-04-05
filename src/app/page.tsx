"use client";

import Taskbar from "./components/Taskbar";
import { useContext } from "react";
import { TaskbarContext } from "./TaskbarContext";

export default function Home() {
  const { activeApp, setActiveApp } = useContext(TaskbarContext);

  return (
    <div className="bg-[#6ba8a9] w-full h-svh overscroll-none">
      <Taskbar />
      <p>{activeApp}</p>
    </div>
  );
}
