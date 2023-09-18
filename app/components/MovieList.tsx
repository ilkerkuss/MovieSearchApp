import { MovieInterface } from "../models";
import { Card } from "./Card";

export const MovieList = ({ movies }: { movies: MovieInterface[] }) => {
  return (
    <div className="card-container flex flex-wrap items-center justify-between self-center mx-12 mt-20 gap-5">
      {movies?.map((movie: MovieInterface) => {
        return (
          <Card
            key={movie.movieId}
            movieId={movie.movieId}
            name={movie.name}
            posterUrl={movie.posterUrl}
            releaseYear={movie.releaseYear}
            rating={movie.rating}
            genres={movie.genres}
          ></Card>
        );
      })}
    </div>
  );
};
