import { create } from "zustand";

type SettingsState = {
  arabicFont: "amiri" | "scheherazade";
  arabicSize: number;
  translationSize: number;

  setSettings: (data: Partial<SettingsState>) => void;
  loadSettings: () => void;
};

export const useSettings = create<SettingsState>((set, get) => ({
  arabicFont: "amiri",
  arabicSize: 32,
  translationSize: 18,

  setSettings: (data) => {
    const newState = { ...get(), ...data };

    if (typeof window !== "undefined") {
      localStorage.setItem("settings", JSON.stringify(newState));
    }

    set(newState);
  },

  loadSettings: () => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("settings");
    if (saved) {
      set(JSON.parse(saved));
    }
  },
}));
