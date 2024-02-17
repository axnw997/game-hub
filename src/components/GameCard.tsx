import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import { GameIconList } from "./GameIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

export interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justify="space-between" marginBottom={3}>
            <GameIconList game={game} />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="xl">{game.name}</Heading>
            <Emoji rating={game.rating_top}></Emoji>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
