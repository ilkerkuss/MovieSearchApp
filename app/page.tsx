"use client";
import {
  HeaderContainer,
  MovieList,
  Pagination,
  SearchBar,
  Spinner,
} from "./components";
import { useEffect, useState } from "react";
import {
  FilterInterface,
  MovieInterface,
  MovieResponseInterface,
} from "./models";
import { removeEmptyKeys } from "./utils";

export default function Home() {
  const [filters, setFilters] = useState<FilterInterface>({
    pageNumber: 1,
    pageSize: 12,
    releaseYear: undefined,
    genreId: undefined,
    platformId: undefined,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [movieResponse, setMovieResponse] = useState<MovieResponseInterface>();
  const [movies, setMovies] = useState<MovieInterface[]>([]);

  async function handleMovieRequest(filters: FilterInterface) {
    setLoading(true);
    fetch(
      "https://communicationservice.sabancidx.com/moviemap/movie/get-movie-list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(removeEmptyKeys(filters)),
      }
    )
      .then((response) => response.json())
      .then((res: MovieResponseInterface) => {
        setMovieResponse(res);
        setMovies(res.data.movies);
        setLoading(false);
      });
  }

  useEffect(() => {
    handleMovieRequest(filters);
  }, [filters]);

  return (
    <div className="flex flex-col w-full h-full bg-[#d3f0f4] px-32">
      <SearchBar
        onSearch={(filters) => {
          console.log("search: 0", filters);
          setFilters({
            pageNumber: 1,
            pageSize: 12,
            ...filters,
          });
        }}
      />
      <HeaderContainer />
      {loading ? (
        <div className="my-8 w-full h-[100px]">
          <Spinner />
        </div>
      ) : (
        <MovieList movies={movies} />
      )}
      {!loading && (
        <Pagination
          pageNumber={movieResponse?.data.pageNumber || 0}
          pageCount={movieResponse?.data.pageCount || 0}
          totalRecord={movieResponse?.data.totalRecord || 0}
          pageSize={filters.pageSize || 0}
          onPrev={() => {
            setFilters({
              ...filters,

              pageNumber: (filters?.pageNumber || 1) - 1,
            });
          }}
          onNext={() => {
            setFilters({
              ...filters,
              pageNumber: (filters?.pageNumber || 0) + 1,
            });
          }}
        />
      )}
    </div>
  );
}
