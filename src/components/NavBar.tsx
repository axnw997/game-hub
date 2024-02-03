import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image src={logo} boxSize="50px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};
