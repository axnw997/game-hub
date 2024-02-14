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
  selectedGenre: Genres | null;
}

const GenreList = ({ onSelectGenre,selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      <Heading>Genres</Heading>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
            ></Image>
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
              colorScheme= {genre.id === selectedGenre?.id ? "green" : ""}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
