"use client";

import { useSettings } from "../app/context/SettingContext";

export default function SettingsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const {
    arabicFont,
    setArabicFont,
    arabicSize,
    setArabicSize,
    translationSize,
    setTranslationSize,
  } = useSettings();

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#11161c] p-6 rounded-xl w-[90%] max-w-md text-white space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Settings</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Arabic Font */}
        <div>
          <label className="block mb-2">{arabicFont}</label>
          <select
            className="w-full p-2 bg-[#0b0f14] rounded"
            value={arabicFont}
            onChange={(e) => setArabicFont(e.target.value)}
          >
            <option value="Amiri">Amiri</option>
            <option value="Scheherazade">Scheherazade</option>
          </select>
        </div>

        {/* Arabic Size */}
        <div>
          <label>Arabic Font Size: {arabicSize}</label>
          <input
            type="range"
            min="20"
            max="60"
            value={arabicSize}
            onChange={(e) => setArabicSize(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Translation Size */}
        <div>
          <label>Translation Size: {translationSize}</label>
          <input
            type="range"
            min="12"
            max="30"
            value={translationSize}
            onChange={(e) => setTranslationSize(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
