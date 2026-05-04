export default function TopBar({ mobileView, goBack, openSettings }: any) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-[#0b0f14] border-b border-gray-800">
      <button onClick={goBack} className="text-xl md:hidden">
        {mobileView === "ayah" ? "←" : "☰"}
      </button>

      <h1 className="text-sm md:text-lg font-semibold">Quran App</h1>

      <button onClick={openSettings} className="text-xl">
        ⚙️
      </button>
    </div>
  );
}
