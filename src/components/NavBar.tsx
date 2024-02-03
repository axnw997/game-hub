import { HStack,Image,Text } from "@chakra-ui/react"
import logo from "../assets/react.svg"

export const NavBar = () => {
  return (
    
    <HStack>
        <Image src={logo} boxSize="50px"></Image>
        <Text>Nav bar</Text>
    </HStack>
  )
}
