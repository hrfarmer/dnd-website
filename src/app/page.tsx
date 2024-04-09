"use client";

import Taskbar from "./components/Taskbar";
import NotionLayout from "./components/NotionLayout";
import NotepadLayout from "./components/NotepadLayout";
import { useContext, useEffect, useState } from "react";
import { TaskbarContext } from "./TaskbarContext";
import { checkIfInDiscord } from "./actions";
import { SignOutButton, useUser } from "@clerk/nextjs";

interface LayoutMatcherType {
  [key: string]: React.ComponentType<any>;
}

const LayoutMatcher: LayoutMatcherType = {
  notion: NotionLayout,
  notepad: NotepadLayout,
};

export default function Home() {
  const { activeApp } = useContext(TaskbarContext);
  const { user, isLoaded } = useUser();
  const [isAuthorized, setAuthorized] = useState<boolean>(false);
  const Component = LayoutMatcher[activeApp];

  useEffect(() => {
    const getData = async () => {
      console.log("hai");
      const data = await checkIfInDiscord(user?.username ?? "");
      setAuthorized(data);
    };

    getData();
  }, [user?.username]);

  if (!isLoaded) {
    return <div>Website is loading...</div>;
  }

  if (!isAuthorized) {
    return (
      <div className="flex flex-col items-center justify-center w-svw h-svw">
        <div>ur not in the server buddy</div>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div className="bg-[#6ba8a9] w-full h-svh overscroll-none">
      {Component ? <Component /> : null}
      <Taskbar />
    </div>
  );
}
