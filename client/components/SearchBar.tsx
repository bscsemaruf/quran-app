"use client";

import axios from "axios";
import { useState } from "react";

export default function SearchBar() {
  const [results, setResults] = useState([]);

  const search = async (q: string) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/search?q=${q}`,
    );
    setResults(res.data);
  };

  return (
    <div>
      <input onChange={(e) => search(e.target.value)} placeholder="Search..." />

      {results.map((r: any) => (
        <p key={r.globalNumber}>{r.translation}</p>
      ))}
    </div>
  );
}
