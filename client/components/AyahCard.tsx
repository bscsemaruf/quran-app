// "use client";

// import { useSettings } from "@/app/context/SettingContext";

// export default function AyahCard({ ayah }: any) {
//   const { arabicFont, arabicSize, translationSize } = useSettings();

//   return (
//     <div className="p-4 bg-[#11161c] rounded-xl space-y-2">
//       {/* ARABIC */}
//       <p
//         className="text-right"
//         style={{
//           fontFamily: arabicFont,
//           fontSize: arabicSize + "px",
//         }}
//       >
//         {ayah.arabic}
//       </p>

//       {/* TRANSLATION */}
//       <p
//         style={{
//           fontSize: translationSize + "px",
//         }}
//         className="text-gray-300"
//       >
//         {ayah.translation}
//       </p>
//     </div>
//   );
// }

"use client";

import { useSettings } from "@/app/context/SettingContext";
import AudioPlayer from "@/components/AudioPlayer";

export default function AyahCard({ ayah }: any) {
  const { arabicFont, arabicSize, translationSize } = useSettings();

  return (
    <div className="p-4 bg-[#11161c] rounded-xl space-y-2 ">
      {/* 🔊 AUDIO BUTTON */}
      <div className="text-right">
        <AudioPlayer number={ayah.globalNumber} />
      </div>

      {/* ARABIC */}
      <p
        className="text-right"
        style={{
          fontFamily: arabicFont,
          fontSize: arabicSize + "px",
        }}
      >
        {ayah.arabic}
      </p>

      {/* TRANSLATION */}
      <p
        style={{
          fontSize: translationSize + "px",
        }}
        className="text-gray-300"
      >
        {ayah.translation}
      </p>
    </div>
  );
}
