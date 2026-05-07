"use client";

import { useState } from "react";

import quran from "@/data/quran.json";

import { stopCurrentAudio, setCurrentAudio } from "../app/lib/audioManager";

interface Props {
  surah: number;
}

export default function SurahPlayer({ surah }: Props) {
  const [playing, setPlaying] = useState(false);

  /*
    ✅ whole surah play
  */
  const playSurah = async () => {
    /*
      ✅ old audio stop
    */
    stopCurrentAudio();

    /*
      ✅ start from beginning
    */
    setPlaying(true);

    /*
      ✅ current surah ayahs
    */
    const surahAyahs = quran.filter((a: any) => a.surah === surah);

    /*
      ✅ recursive play function
    */
    const playAyah = async (index: number) => {
      /*
        ✅ stop when finished
      */
      if (index >= surahAyahs.length) {
        setPlaying(false);
        return;
      }

      /*
        ✅ current ayah
      */
      const ayah = surahAyahs[index];

      /*
        ✅ format
      */
      const surahStr = String(surah).padStart(3, "0");

      const ayahStr =
        surahStr === "001"
          ? String(ayah.ayah).padStart(3, "0")
          : String(Number(ayah.ayah) - 1).padStart(3, "0");

      /*
        ✅ url
      */
      const url = `https://everyayah.com/data/Alafasy_128kbps/${surahStr}${ayahStr}.mp3`;

      /*
        ✅ create audio
      */
      const audio = new Audio(url);

      /*
        ✅ global save
      */
      setCurrentAudio(audio);

      /*
        ✅ play audio
      */
      try {
        await audio.play();
      } catch (err) {
        console.log(err);
      }

      /*
        ✅ when finish -> next ayah
      */
      audio.onended = () => {
        playAyah(index + 1);
      };
    };

    /*
      ✅ start first ayah
    */
    playAyah(0);
  };

  /*
    ✅ stop manually
  */
  const stop = () => {
    stopCurrentAudio();

    setPlaying(false);
  };

  return (
    <button
      onClick={playing ? stop : playSurah}
      className={`px-4 py-2 rounded-lg transition
      ${
        playing
          ? "bg-red-600 hover:bg-red-700"
          : "bg-emerald-600 hover:bg-emerald-700"
      }`}
    >
      {playing ? "■ Stop Surah" : "▶ Play Surah"}
    </button>
  );
}
