import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        Dark Mode {colorMode === "light" ? "Off" : "On"}
      </Switch>
  )
}

export default ColorModeSwitch