import { create } from "zustand";

export const useSettings = create((set) => ({
  arabicFont: "amiri",
  arabicSize: 32,
  translationSize: 18,

  setSettings: (s: any) => {
    localStorage.setItem("settings", JSON.stringify(s));
    set(s);
  },

  load: () => {
    const saved = localStorage.getItem("settings");
    if (saved) set(JSON.parse(saved));
  },
}));
