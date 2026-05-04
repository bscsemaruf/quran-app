"use client";

import { useRouter } from "next/navigation";

export default function Sidebar({
  setMobileView,
  openSearch,
  openSettings,
}: any) {
  const router = useRouter();

  return (
    <div className="hidden lg:flex w-[60px] bg-[#322a2a] flex-col items-center py-4 gap-6 border-r border-gray-800 text-xl">
      <button onClick={() => router.push("/")} title="Home">
        ☰
      </button>

      <button onClick={() => setMobileView("list")} title="Surah">
        📖
      </button>

      <button onClick={openSearch} title="Search">
        🔍
      </button>

      <button onClick={openSettings} className="mt-auto" title="Settings">
        ⚙️
      </button>
    </div>
  );
}
