import fs from "fs";

// read your files
const base = JSON.parse(fs.readFileSync("./client/data/surah.json", "utf-8"));

const meta = JSON.parse(
  fs.readFileSync("./client/data/surah-meta.json", "utf-8"),
);

// merge
const merged = base.map((s: any) => {
  const number = Number(s.index);

  const metaSurah = meta.find((m: any) => m.number === number);

  return {
    number,
    place: s.place,
    type: s.type,
    count: s.count,
    title: s.title,
    titleAr: s.titleAr,
    pages: s.pages,
    juz: s.juz,

    // 🔥 new fields
    englishName: metaSurah?.englishName || "",
    englishNameTranslation: metaSurah?.englishNameTranslation || "",
  };
});

// save
fs.writeFileSync(
  "./client/data/surah-final.json",
  JSON.stringify(merged, null, 2),
);

console.log("✅ Merged successfully!");
