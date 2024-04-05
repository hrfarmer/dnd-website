"use client";

import React, {
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

export interface ActiveAppContextType {
  activeApp: string;
  setActiveApp: Dispatch<SetStateAction<string>>;
}

export const TaskbarContext = createContext<ActiveAppContextType>({
  activeApp: "",
  setActiveApp: () => {},
});

export const TaskbarContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [activeApp, setActiveApp] = useState<string>("");

  return (
    <TaskbarContext.Provider value={{ activeApp, setActiveApp }}>
      {children}
    </TaskbarContext.Provider>
  );
};
