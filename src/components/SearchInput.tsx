import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props{
    onSearch: (searchText:string)=>void
}

const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form 
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value); 
          // we need to pass this to app components, and make the game card re-render
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
