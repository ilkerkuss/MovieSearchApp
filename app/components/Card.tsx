"use client";
import { useEffect, useState } from "react";
import { MovieInterface } from "../models";
import Image from "next/image";
import Link from "next/link";

export const Card = ({
  movieId,
  name,
  posterUrl,
  releaseYear,
  rating,
  genres,
}: MovieInterface) => {
  const [imgSrc, setImgSrc] = useState(posterUrl);

  useEffect(() => {
    setImgSrc(posterUrl);
  }, [posterUrl]);

  return (
    <div className="flex basis-1/5 flex-col items-center w-[245px] bg-white rounded-xl p-3">
      <Image
        className="rounded-xl w-[215px] h-[318px]"
        alt="Movie Image"
        width={215}
        height={318}
        src={imgSrc ? imgSrc : "/not-found.png"}
        onError={() => {
          setImgSrc("/not-found.png");
        }}
      ></Image>

      <div className="movie-content flex flex-col justify-start w-full">
        <span className="text-[#5a5a5a] font-medium text-xs">
          {releaseYear}
        </span>

        <span
          title={name}
          className="text-[#121212] w-[215px] font-extrabold text-base whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {name}
        </span>
        <span className="text-[#5a5a5a] font-medium text-xs">
          Score: {rating}/10
        </span>
        <span className="text-[#959ca4] font-medium text-xs leading-4 h-[2em]">
          {genres.toString()}
        </span>
      </div>

      <div className="buttons flex mt-2">
        <button
          className="bg-[#111155] rounded-md text-white px-4 w-[215px] h-[34px]"
          onClick={() => {
            console.log(movieId, "buttonu basıldı");
          }}
        >
          <Link href={`/movies/${movieId}`}>See Details</Link>
        </button>
      </div>
    </div>
  );
};
