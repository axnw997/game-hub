import {
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
            <Text fontSize="lg">{each.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
