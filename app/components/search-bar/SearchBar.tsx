"use client";
import Image from "next/image";
import SearchIcon from "public/search-icon.png";
import { GenreSelect } from "./GenreSelect";
import { ReleaseYearSelect } from "./ReleaseYearSelect";
import { PlatformSelect } from "./PlatformSelect";
import { useEffect, useState } from "react";
import { FilterInterface } from "@/app/models";

export const SearchBar = ({
  onSearch,
}: {
  onSearch: (filters: FilterInterface) => void;
}) => {
  const [filters, setFilters] = useState<FilterInterface>({
    releaseYear: undefined,
    genreId: undefined,
    platformId: undefined,
  });

  const changeFilters = (
    property: "releaseYear" | "genreId" | "platformId",
    value: string | undefined
  ) => {
    setFilters((prev: FilterInterface) => {
      return { ...prev, [property]: value };
    });
  };

  return (
    <div className="search-container flex flex-row justify-start items-center mx-12 h-[80px]">
      <div className="flex items-center">
        <Image
          src={SearchIcon}
          alt="Search Icon"
          width={40}
          height={40}
        ></Image>
        <span className="px-3 font-semibold">Movie</span>
      </div>
      <div className="flex flex-row px-5">
        <GenreSelect onSelect={(genre) => changeFilters("genreId", genre)} />
        <ReleaseYearSelect
          onSelect={(releaseYear) => changeFilters("releaseYear", releaseYear)}
        />
        <PlatformSelect
          onSelect={(platform) => changeFilters("platformId", platform)}
        />
        {/* <input
            style={{
              background:
                "url(https://static.thenounproject.com/png/101791-200.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              backgroundSize: 20,
              paddingLeft: "25px",
              backgroundColor: "#ffffff",
            }}
            className="w-[341px] h-[46px] ml-4 mr-2 rounded-lg"
            placeholder="Search for movies and more"
          ></input> */}
      </div>
      <button
        className="bg-[#111155] rounded-md text-white px-4 w-[93px] h-[46px]"
        onClick={() => onSearch(filters)}
      >
        Search
      </button>
    </div>
  );
};
