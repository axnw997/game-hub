import useData from "./useData";
import { Genres } from "./useGenres";

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

const useGame = (selectedGenre: Genres | null) => {
  return useData<Game>("/games", {params:{genres:selectedGenre?.id}}, [selectedGenre?.id]); //这里return的数据就是data, error 和 isloading
};

export default useGame;
