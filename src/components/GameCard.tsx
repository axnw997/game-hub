import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import { GameIconList } from "./GameIconList";
import CriticScore from "./CriticScore";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
        <HStack justify="space-between"><GameIconList game={game} />
        <CriticScore score={game.metacritic}></CriticScore></HStack>
        
      </CardBody>
    </Card>
  );
};

export default GameCard;
