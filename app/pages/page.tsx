"use client";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Image from "next/image";
import { MovieInterface } from "../modals";
import StarIcon from "@/public/star.png";

export default function Page(movie: MovieInterface) {
  const [imgSrc, setImgSrc] = useState(movie.imgUrl);

  useEffect(() => {
    setImgSrc(movie.imgUrl);
  }, [movie.imgUrl]);

  return (
    <div className="flex w-full h-full bg-[#d3f0f4]">
      <div className="poster flex w-auto h-auto p-4">
        <Image
          className="rounded-xl"
          alt="Movie Image"
          width={500}
          height={600}
          src={
            "https://m.media-amazon.com/images/M/MV5BMjIyMDE0NzY1M15BMl5BanBnXkFtZTgwOTgzMzgwMzE@._V1_.jpg"
          }
          priority={true}
          onError={() => {
            setImgSrc("/not-found.png");
          }}
        ></Image>
      </div>

      <div className="details flex flex-col w-2/3 items-center px-5">
        <div className="headers flex justify-between items-center">
          <button
            className="bg-[#111155] w-12 h-12 rounded-full text-white items-center justify-center mr-5"
            onClick={() => {
              console.log("aramaya dön");
            }}
          >
            ❮
          </button>
          <span className="text-7xl font-extrabold text-[#121212] my-8">
            The Fantasticks
          </span>
        </div>
        <div className="release-info flex w-full justify-between my-8 px-12 ">
          <span className="text-lg">Release Year: 2000</span>
          <div className="ration-info flex">
            <Image
              src={StarIcon}
              alt=" "
              width={20}
              height={20}
              style={{ height: "20px", display: "flex", alignSelf: "center" }}
            />
            <span className="px-1 text-lg">5.6 / 10</span>
          </div>
        </div>
        <span className="flex my-16 px-12">
          Fantasticks, Joel Grey, Barnard Hughes ve Jean Louisa Kellynin
          oynadığı bir filmdir. Kırsal kesimdeki küçük bir topluluğa gelen
          gizemli bir fuar, iki gencin yanılsamalarını gerçeğe dönüştürebilir.
        </span>
        <span>Musical,Romance</span>
        <span>Director: Michael Ritchie </span>
        <span>Actors : Joel Grey,Barnard Hughes,Jean Louisa Kelly</span>
        <div className="platform-container flex flex-col justify-center items-center my-5 ">
          <Image
            src={"https://cdn.sabancidx.com/moviemap/netflix.png"}
            alt="platform Logo"
            width={60}
            height={60}
            style={{ width: "auto", height: "auto" }}
          ></Image>
        </div>
      </div>
    </div>
  );
}
