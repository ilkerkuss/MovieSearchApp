"use client";
import { useEffect, useState } from "react";
import { MovieInterface } from "../modals";
import Image from "next/image";

export const Card = ({
  imgUrl,
  title,
  releaseYear,
  releaseLocation,
  score,
  genre,
}: MovieInterface) => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  useEffect(() => {
    setImgSrc(imgUrl);
  }, [imgUrl]);

  return (
    <div className="flex basis-1/5 flex-col items-center w-[245px] bg-white rounded-xl p-2">
      {/* <div className="flex justify-center items-center bg-red-500 h-[318px] w-[215px] rounded-xl m-3">
        resim
      </div> */}
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

      <div className="movie-content flex flex-col justify-start px-4 w-full">
        <span className="text-[#5a5a5a] font-medium text-xs">
          {releaseLocation},{releaseYear}
        </span>

        <span
          title={title}
          className="text-[#121212] font-extrabold text-base whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {title}
        </span>
        <span className="text-[#5a5a5a] font-medium text-xs">
          Score: {score}/10
        </span>
        <span className="text-[#959ca4] font-medium text-xs h-[2em]">
          {genre}
        </span>
      </div>

      <div className="buttons flex my-2">
        <button className="bg-[#111155] rounded-md text-white px-4 w-[215px] h-[34px]">
          See Details
        </button>
      </div>
    </div>
  );
};
