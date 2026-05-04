export default function SearchModal({
  open,
  query,
  setQuery,
  results,
  onClose,
}: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-[#11161c] p-4 rounded-xl w-[90%] max-w-lg">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search translation..."
          className="w-full p-2 rounded bg-[#0b0f14] text-white"
        />

        <div className="mt-4 max-h-80 overflow-y-auto space-y-2">
          {results.slice(0, 20).map((a: any) => (
            <div key={a.globalNumber} className="p-2 bg-[#1a222c] rounded">
              <p className="text-sm">{a.translation}</p>
              <p className="text-xs text-gray-400">
                Surah {a.surah} - Ayah {a.ayah}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-3 w-full bg-red-500 p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
