"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MovieInterface, MovieResponseInterface } from "@/app/models";
import StarIcon from "@/public/star.png";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieInterface>();
  const [imgSrc, setImgSrc] = useState(movie?.posterUrl);
  const router = useRouter();

  async function handleMovieRequest(movieId: string) {
    setLoading(true);
    fetch(
      "https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId: movieId }),
      }
    )
      .then((response) => response.json())
      .then((res: MovieResponseInterface) => {
        if (!res.data?.movies?.length) {
          router.push("/");
        } else {
          handleDirectorMoviesRequest(res.data.movies[0].director?.directorId);
          setMovie(res.data.movies[0]);
          setLoading(false);
        }
      });
  }

  async function handleDirectorMoviesRequest(directorId?: string) {
    if (directorId) {
      fetch(
        "https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ directorId: directorId }),
        }
      )
        .then((response) => response.json())
        .then((res: MovieResponseInterface) => {
          console.log("director movies:", res.data.movies);

          // if (!res.data?.movies?.length) {
          //   router.push("/");
          // } else {
          //   setMovie(res.data.movies[0]);
          //   setLoading(false);
          // }
        });
    }
  }

  useEffect(() => {
    handleMovieRequest(params.slug);
  }, [params]);

  useEffect(() => {
    setImgSrc(movie?.posterUrl);
  }, [movie?.posterUrl]);

  return (
    <div className="flex w-full h-screen bg-[#d3f0f4]">
      <div className="poster flex w-auto h-auto p-4">
        <Image
          className="rounded-xl"
          alt="Movie Image"
          width={500}
          height={600}
          src={imgSrc || "/not-found.png"}
          priority={true}
          onError={() => {
            setImgSrc("/not-found.png");
          }}
        />
      </div>

      <div className="details flex flex-col w-2/3 items-center px-5">
        <div className="headers flex justify-between items-center">
          <button
            className="bg-[#111155] w-12 h-12 rounded-full text-white items-center justify-center mr-5"
            onClick={() => router.push("/")}
          >
            ❮
          </button>
          <span className="text-7xl font-extrabold text-[#121212] my-8">
            {movie?.name}
          </span>
        </div>
        <div className="release-info flex w-full justify-between my-8 px-12 ">
          <span className="text-lg">Release Year: {movie?.releaseYear}</span>
          <div className="ration-info flex">
            <Image
              src={StarIcon}
              alt=" "
              width={20}
              height={20}
              style={{ height: "20px", display: "flex", alignSelf: "center" }}
            />
            <span className="px-1 text-lg">{movie?.rating} / 10</span>
          </div>
        </div>
        <span className="flex my-16 px-12">{movie?.descriptionContent}</span>
        <span>{movie?.genres.toString()}</span>
        <span>Director: {movie?.director?.directorName} </span>
        <span>
          Actors : {movie?.actors?.map((actor) => actor.actorName).toString()}
        </span>

        <div className="platform-container flex flex-col justify-center items-center my-5 ">
          {movie?.platforms?.map((plarform) => {
            return (
              <Image
                key={plarform.platformId}
                src={plarform.platformLogoUrl}
                alt="platform Logo"
                width={60}
                height={60}
                style={{ width: "auto", height: "auto" }}
              ></Image>
            );
          })}
        </div>
      </div>
    </div>
  );
}
