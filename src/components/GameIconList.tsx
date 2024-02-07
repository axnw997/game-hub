import { HStack, Icon } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  game: Game;
}

export const GameIconList = ({ game }: Props) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack color="gray.500" marginTop={1}>
      {game.parent_platforms.map((p) => (
        <Icon key={p.platform.id} as={iconMap[p.platform.slug]}></Icon>
      ))}
    </HStack>
  );
};
