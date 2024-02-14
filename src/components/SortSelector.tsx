import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown />}>
      Order By
    </MenuButton>
    <MenuList>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>5</MenuItem>
      <MenuItem>4</MenuItem>
      <MenuItem>44</MenuItem>
      <MenuItem>444</MenuItem>
    </MenuList>
  </Menu>
  )
}

export default SortSelector