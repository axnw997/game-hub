import { GameQuery } from "../App";
import useData from "./useData";

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

const useGame = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder } },
    [gameQuery]
  ); //这里return的数据就是data, error 和 isloading
};

export default useGame;
