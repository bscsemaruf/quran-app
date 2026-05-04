"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import surahs from "@/data/surah.json";
import quran from "@/data/quran.json";
import AyahCard from "@/components/AyahCard";
import SettingsModal from "@/components/SettingsModal";

interface IAyah {
  surah: number;
  ayah: number;
  arabic: string;
  translation: string;
  globalNumber: number;
}

interface ISurah {
  number: number;
  place: string;
  type: string;
  count: number;
  title: string;
  titleAr: string;
  englishNameTranslation: string;
}

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [settingsOpen, setSettingsOpen] = useState(false);

  const surahParam = searchParams.get("surah");
  const selectedSurah =
    surahParam && !isNaN(Number(surahParam)) ? Number(surahParam) : 1;

  const ayahs = quran.filter((a: IAyah) => a.surah === selectedSurah);
  const surahDetails = surahs.find((s) => s.number === selectedSurah);

  const [mobileView, setMobileView] = useState<"list" | "ayah">(
    surahParam ? "ayah" : "list",
  );

  const handleSurahClick = (num: number) => {
    router.push(`/?surah=${num}`);
    setMobileView("ayah");
  };

  const goBack = () => {
    setMobileView("list");
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen bg-[#221717] text-white">
      {/* 🌐 TOP BAR (ALL DEVICES) */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0b0f14] border-b border-gray-800">
        <button onClick={goBack} className="text-xl md:hidden">
          {mobileView === "ayah" ? "←" : "☰"}
        </button>

        <h1 className="text-sm md:text-lg font-semibold">Quran App</h1>

        <button
          onClick={() => setSettingsOpen(true)}
          className="text-xl hover:scale-110 transition"
        >
          ⚙️
        </button>
      </div>

      {/* 📌 MAIN WRAPPER (IMPORTANT FIX HERE) */}
      <div className="flex flex-1 min-h-0">
        {/* 📌 ICON SIDEBAR (DESKTOP ONLY) */}
        <div className="hidden lg:flex w-[60px] bg-[#322a2a] flex-col items-center py-4 gap-6 border-r border-gray-800">
          <div>☰</div>
          <div>📖</div>
          <div>🔍</div>
          <div className="mt-auto">⚙️</div>
        </div>

        {/* 📌 SURAH SIDEBAR (FIXED SCROLL) */}
        <div className="hidden md:block w-80 lg:w-96 bg-[#0b0f14] border-r border-[#1f2937] overflow-y-auto min-h-0">
          <div className="p-4 font-bold border-b border-gray-800">Surah</div>

          {surahs.map((s: ISurah) => (
            <Link
              key={s.number}
              href={`/?surah=${s.number}`}
              className="block px-3"
            >
              <div
                className={`flex justify-between px-4 py-3 my-1 rounded-xl transition
                ${
                  selectedSurah === s.number
                    ? "bg-[#1f2937] border-l-4 border-emerald-500"
                    : "bg-[#11161c] hover:bg-[#1a222c]"
                }`}
              >
                <div>
                  <div>
                    {s.number}. {s.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {s.englishNameTranslation}
                  </div>
                </div>

                <div className="text-xl">{s.titleAr}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* 📱 MOBILE LIST */}
        {mobileView === "list" && (
          <div className="md:hidden flex-1 overflow-y-auto p-4 min-h-0">
            {surahs.map((s: ISurah) => (
              <div
                key={s.number}
                onClick={() => handleSurahClick(s.number)}
                className="flex justify-between items-center p-4 my-2 bg-[#11161c] rounded-xl cursor-pointer"
              >
                <div>
                  <div>
                    {s.number}. {s.title}
                  </div>
                  <div className="text-sm text-gray-400">
                    {s.englishNameTranslation}
                  </div>
                </div>
                <div>{s.titleAr}</div>
              </div>
            ))}
          </div>
        )}

        {/* 📖 AYAH VIEW */}
        {mobileView === "ayah" && (
          <div className="flex-1 overflow-y-auto bg-[#0b0f14] min-h-0">
            <div className="p-4 text-center sticky top-0 bg-[#0b0f14] border-b border-gray-800">
              <h1 className="text-lg font-semibold">
                Surah {surahDetails?.title}
              </h1>
              <p className="text-sm text-gray-400">
                Ayah {surahDetails?.count} • {surahDetails?.place}
              </p>
            </div>

            <div className="p-5 space-y-4">
              {ayahs.map((ayah: IAyah) => (
                <AyahCard key={ayah.globalNumber} ayah={ayah} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ⚙️ SETTINGS MODAL */}
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}
