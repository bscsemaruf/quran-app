import surahs from "@/data/surah.json";
import Link from "next/link";

export default function SurahSidebar() {
  return (
    <div className="w-64 h-screen overflow-y-auto bg-[#0f172a]">
      {surahs.map((s: any) => (
        <Link key={s.id} href={`/surah/${s.id}`}>
          <div className="p-3 hover:bg-gray-800">
            <p>
              {s.id}. {s.name}
            </p>
            <p className="text-right">{s.arabic}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
