import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </>
  );
};

export default SearchInput;
