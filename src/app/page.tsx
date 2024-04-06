"use client";

import Taskbar from "./components/Taskbar";
import { useContext } from "react";
import { TaskbarContext } from "./TaskbarContext";
import NotionLayout from "./components/NotionLayout";
import NotepadLayout from "./components/NotepadLayout";

interface LayoutMatcherType {
  [key: string]: React.ComponentType<any>;
}

const LayoutMatcher: LayoutMatcherType = {
  notion: NotionLayout,
  notepad: NotepadLayout,
};

export default function Home() {
  const { activeApp, setActiveApp } = useContext(TaskbarContext);

  const Component = LayoutMatcher[activeApp];

  return (
    <div className="bg-[#6ba8a9] w-full h-svh overscroll-none">
      {Component ? <Component /> : null}
      <Taskbar />
    </div>
  );
}
