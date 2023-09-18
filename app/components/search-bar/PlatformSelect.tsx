import { useCallback, useEffect, useState } from "react";
import { PlatformInterface } from "@/app/models";

export const PlatformSelect = ({
  onSelect,
}: {
  onSelect: (platform: string | undefined) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [platforms, setPlatforms] = useState<PlatformInterface[]>([]);

  const getPlatforms = useCallback(async () => {
    fetch(
      "https://communicationservice.sabancidx.com/moviemap/movie/get-platform-list"
    )
      .then((response) => response.json())
      .then((res) => {
        setPlatforms(res.data.platforms);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getPlatforms();
  }, [getPlatforms]);

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
        Choose a platform
      </option>
      {platforms.map((platform: PlatformInterface) => {
        return (
          <option key={platform.platformId} value={platform.platformId}>
            {platform.platformName}
          </option>
        );
      })}
    </select>
  );
};
