import useData from "./useData";
import { Genres } from "./useGenres";
import { Platforms } from "./usePlatforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (
  selectedGenre: Genres | null,
  selectedPlatform: Platforms | null
) => {
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  ); //这里return的数据就是data, error 和 isloading
};

export default useGame;
