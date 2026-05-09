// "use client";

// import { useRef } from "react";

// interface AudioPlayerProps {
//   surah: number;
//   ayah: number;
// }

// export default function AudioPlayer({ surah, ayah }: AudioPlayerProps) {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const play = () => {
//     // ✅ যদি আগের audio চলে → stop করো
//     if (audioRef.current) {
//       audioRef.current.pause();

//       // শুরুতে নিয়ে যায়
//       audioRef.current.currentTime = 0;
//     }

//     // ✅ surah formatting
//     const surahStr = String(surah).padStart(3, "0");

//     const ayahStr =
//       surahStr === "001"
//         ? String(ayah).padStart(3, "0")
//         : String(Number(ayah) - 1).padStart(3, "0");

//     const url = `https://everyayah.com/data/Alafasy_128kbps/${surahStr}${ayahStr}.mp3`;

//     // ✅ নতুন audio create
//     const audio = new Audio(url);

//     // ✅ ref এ save
//     audioRef.current = audio;

//     audio.onerror = () => {
//       console.log("Audio not found:", url);
//     };

//     audio.play().catch((err) => {
//       console.log("Play failed:", err);
//     });
//   };

//   return (
//     <button
//       onClick={play}
//       className="px-3 py-1 rounded bg-green-600 hover:bg-green-700"
//     >
//       ▶
//     </button>
//   );
// }

"use client";

import { useRef, useState } from "react";

import { stopCurrentAudio, setCurrentAudio } from "../app/lib/audioManager";

interface AudioPlayerProps {
  surah: number;
  ayah: number;
}

export default function AudioPlayer({ surah, ayah }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);

  const play = async () => {
    /*
      ✅ stop previous global audio
    */
    stopCurrentAudio();

    /*
      ✅ format surah
    */
    const surahStr = String(surah).padStart(3, "0");

    /*
      ✅ format ayah
    */
    const ayahStr =
      surahStr === "001"
        ? String(ayah).padStart(3, "0")
        : String(Number(ayah) - 1).padStart(3, "0");

    /*
      ✅ audio url
    */
    const url = `https://everyayah.com/data/Alafasy_128kbps/${surahStr}${ayahStr}.mp3`;

    /*
      ✅ create new audio
    */
    const audio = new Audio(url);

    /*
      ✅ save local ref
    */
    audioRef.current = audio;

    /*
      ✅ save global ref
    */
    setCurrentAudio(audio);

    /*
      ✅ playing state
    */
    setPlaying(true);

    /*
      ✅ ended
    */
    audio.onended = () => {
      setPlaying(false);
    };

    /*
      ✅ error
    */
    audio.onerror = () => {
      console.log("Audio not found");
      setPlaying(false);
    };

    try {
      await audio.play();
    } catch (err) {
      console.log(err);
      setPlaying(false);
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();

      audioRef.current.currentTime = 0;
    }

    setPlaying(false);
  };

  return (
    <button
      onClick={playing ? stop : play}
      className={`px-3 py-1 rounded-lg text-sm transition bg-blend-lighten
      ${
        playing
          ? "bg-red-300 hover:bg-red-500"
          : "bg-green-600 hover:bg-green-700"
      }`}
    >
      {playing ? "■" : "▶"}
    </button>
  );
}
