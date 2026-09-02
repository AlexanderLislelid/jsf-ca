"use client";
import { useState } from "react";

export default function ProductSearch() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex align-center">
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder={"Search for products"}
        className="px-4 py-2 rounded-md border my-4"
      />
    </div>
  );
}
