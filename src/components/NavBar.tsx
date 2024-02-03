import {
  Button,
  HStack,
  Image,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import logo from "../assets/react.svg";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="50px"></Image>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Switch>
    </HStack>
  );
};
