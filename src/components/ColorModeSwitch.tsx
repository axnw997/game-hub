import { Switch, useColorMode, Text, HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>
        Dark Mode {colorMode === "light" ? "Off" : "On"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
