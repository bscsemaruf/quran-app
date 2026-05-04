"use client";

import { createContext, useContext, useState } from "react";

type SettingsType = {
  arabicFont: string;
  arabicSize: number;
  translationSize: number;
  setArabicFont: (v: string) => void;
  setArabicSize: (v: number) => void;
  setTranslationSize: (v: number) => void;
};

const SettingsContext = createContext<SettingsType | null>(null);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [arabicFont, setArabicFont] = useState("Amiri");
  const [arabicSize, setArabicSize] = useState(28);
  const [translationSize, setTranslationSize] = useState(16);

  return (
    <SettingsContext.Provider
      value={{
        arabicFont,
        arabicSize,
        translationSize,
        setArabicFont,
        setArabicSize,
        setTranslationSize,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be inside provider");
  return ctx;
}
