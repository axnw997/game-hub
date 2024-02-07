import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGame();
  return (
    <div>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{
        base:1,
        sm:1,
        md:2,
        lg:3,
        xl:5
      }} spacing={10} padding={10}>
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
}
;
export default GameGrid;
