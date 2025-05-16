import Image from "next/image";
import { useState } from "react";
import { useSearch } from "@/context/SearchContext";

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <div className="flex relative w-full pr-2">
        <Image
          src="/images/search-normal.svg"
          alt="Search"
          width={14}
          height={14}
          className="absolute left-3 top-2.5"
        />
        <input
          type="text"
          placeholder="Search Anything..."
          value={searchTerm} // Controlled input
          onChange={(e) => setSearchTerm(e.target.value)} // Update context state on input change
          className="flex flex-1 text-[.7rem] pl-8 px-3 py-2 border border-gray-300 rounded-lg text-black bg-white focus:outline-none"
        />
      </div>
    </form>
  );
}
