import { useCallback, useEffect, useState } from "react";
import { ReleaseYearInterface } from "@/app/models";

export const ReleaseYearSelect = ({
  onSelect,
}: {
  onSelect: (releaseYear: string | undefined) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [releaseYears, setReleaseYears] = useState<ReleaseYearInterface[]>([]);

  const getReleaseYears = useCallback(async () => {
    fetch(
      "https://communicationservice.sabancidx.com/moviemap/movie/get-release-year-list"
    )
      .then((response) => response.json())
      .then((res) => {
        setReleaseYears(res.data.releaseYears);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getReleaseYears();
  }, [getReleaseYears]);

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
        Choose a year
      </option>
      {releaseYears.map((releaseYear: ReleaseYearInterface) => {
        return (
          <option key={releaseYear.year} value={releaseYear.year}>
            {releaseYear.year}
          </option>
        );
      })}
    </select>
  );
};
