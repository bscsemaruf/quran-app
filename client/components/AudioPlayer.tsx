"use client";

export default function AudioPlayer({ surah, ayah }: any) {
  const play = () => {
    const surahStr = String(surah).padStart(3, "0");
    const ayahStr =
      surahStr === "001"
        ? String(ayah).padStart(3, "0")
        : String(Number(ayah) - 1).padStart(3, "0");

    const url = `https://everyayah.com/data/Alafasy_128kbps/${surahStr}${ayahStr}.mp3`;

    const audio = new Audio(url);

    audio.onerror = () => {
      console.log("Audio not found:", url);
    };

    audio.play().catch((err) => {
      console.log("Play failed:", err);
    });
  };

  return <button onClick={play}>▶</button>;
}

// "use client";

// import { useRef } from "react";

// export default function AudioPlayer({ surah, ayah }: any) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const play = () => {
//     const url = `https://everyayah.com/data/Alafasy_128kbps/${String(
//       surah,
//     ).padStart(3, "0")}${String(ayah).padStart(3, "0")}.mp3`;

//     // stop previous audio if playing
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//     }

//     // create new audio
//     audioRef.current = new Audio(url);

//     audioRef.current.play().catch((err) => {
//       console.log("Audio error:", err);
//     });
//   };

//   return <button onClick={play}>▶</button>;
// }
