import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genres: Genres) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      <Heading>Genres</Heading>
      {data.map((each) => (
        <ListItem key={each.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              src={getCroppedImageUrl(each.image_background)}
              boxSize="32px"
            ></Image>
            <Button
              onClick={() => onSelectGenre(each)}
              fontSize="lg"
              variant="link"
            >
              {each.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
