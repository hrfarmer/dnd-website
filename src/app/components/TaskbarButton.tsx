"use client";

import Image from "next/image";
import React, { useContext } from "react";
import { TaskbarContext } from "../TaskbarContext";

export default function TaskbarButton({ id }: { id: string }) {
  const { activeApp, setActiveApp } = useContext(TaskbarContext);

  const isActive = activeApp === id;

  return (
    <div
      className={`h-[80%] w-32 ${
        isActive
          ? "bg-gray-700 border-black"
          : "bg-[#c3c6ca] border-r-black border-b-black border-t-white border-l-white"
      } flex items-center justify-center  border-x-2 border-y-2 select-none mr-2`}
      onClick={() => {
        if (!isActive) {
          setActiveApp(id);
        } else {
          setActiveApp("");
        }
      }}
    >
      <div
        className={`w-full h-full p-1 ${
          isActive ? "bg-[#86898d]" : "bg-[#c3c6ca]"
        } border-r-2 border-b-2 border-r-[#86898d] border-b-[#86898d] flex items-center`}
      >
        <Image
          src={`/${id}.png`}
          alt={`${id} pixel logo`}
          width={24}
          height={24}
        />
        <p className={`px-2 ${isActive ? "text-white" : "text-black"}`}>
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </p>
      </div>
    </div>
  );
}
