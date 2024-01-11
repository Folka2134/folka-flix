import React from "react";
import { Input } from "./ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <MagnifyingGlassIcon className="mr-5 h-10" />
      <Input
        placeholder="Search for movies or TV series"
        className="h-14 border-none text-xl"
      />
    </div>
  );
};

export default SearchBar;
