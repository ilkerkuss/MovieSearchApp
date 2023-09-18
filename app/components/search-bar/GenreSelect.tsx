import { useCallback, useEffect, useState } from "react";
import { GenreInterface } from "@/app/models";

export const GenreSelect = ({
  onSelect,
}: {
  onSelect: (genre: string | undefined) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [genres, setGenres] = useState<GenreInterface[]>([]);

  const getGenres = useCallback(async () => {
    fetch(
      "https://communicationservice.sabancidx.com/moviemap/movie/get-genre-list"
    )
      .then((response) => response.json())
      .then((res) => {
        setGenres(res.data.genres);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  return (
    <select
      disabled={loading}
      defaultValue={undefined}
      className="min-w-[145px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      onChange={(event) => {
        let value: string | undefined = event.target.value;
        if (value === "undefined") {
          value = undefined;
        }
        onSelect(value);
      }}
    >
      <option key="undefined" value="undefined">
        Choose a genre
      </option>
      {genres.map((genre: GenreInterface) => {
        return (
          <option key={genre.genreId} value={genre.genreId}>
            {genre.genreName}
          </option>
        );
      })}
    </select>
  );
};
