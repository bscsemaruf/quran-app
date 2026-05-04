import quran from "@/data/quran.json";
import AyahCard from "@/components/AyahCard";

export async function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

export default function Page({ params }: any) {
  const surahId = Number(params.id);

  const ayahs = quran.filter((a: any) => a.surah === surahId);

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      {/* HEADER */}
      <div className="p-4 border-b border-gray-800 text-lg font-semibold">
        Surah {surahId}
      </div>

      {/* AYAH LIST */}
      <div className="p-6 space-y-4">
        {ayahs.map((ayah: any) => (
          <AyahCard key={ayah.globalNumber} ayah={ayah} />
        ))}
      </div>
    </div>
  );
}
