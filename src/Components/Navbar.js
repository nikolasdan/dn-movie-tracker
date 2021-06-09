import React from "react";
import {
  Box,
  Stack,
  Img,
  Flex,
  Text,
  Button,
  useDisclosure,
  Center,
  Link
} from "@chakra-ui/react";
import { NavLink as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from "@chakra-ui/icons";

const MenuItem = ({ to, children }) => (
  <Link as={RouterLink} to={to} mt={{ base: 4, sm: 0 }} mr={6} display="block"  padding="13px" borderRadius="10px" _focus={{ boxShadow: "none" }} _hover={{ bg: "white", color: "black" , transition: "0.5s" }}>
    {children}
  </Link>
);

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="black"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link href="/">
      <Img  src="mt_logo.svg" objectFit="cover"  height="50px" alt="logo"/>
      </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Center>
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignText="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        fontFamily="Lato"
      >
        <Center>
        <MenuItem to="/search" padding="13px" borderRadius="10px" _focus={{ boxShadow: "none" }} _hover={{ bg: "white", color: "black" , transition: "0.5s" }}>Search</MenuItem>
        <MenuItem to="/watchlist"  padding="13px" borderRadius="10px" _focus={{ boxShadow: "none" }} _hover={{ bg: "white", color: "black" , transition: "0.5s" }}>Favorites</MenuItem>
        <MenuItem to="/history" padding="13px" borderRadius="10px" _focus={{ boxShadow: "none" }} _hover={{ bg: "white", color: "black" , transition: "0.5s" }}>History</MenuItem>
        </Center>
      </Stack>
      </Center>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block", alignText: "center" }}
        mt={{ base: 4, md: 0 }}
      >
        <Center>
        <Button
          variant="outline"
          _hover={{ bg: "white", color: "black" }}
          fontFamily="Lato"
          _focus={{ boxShadow: "none" }}
        >
          Account
        </Button>
        </Center>
      </Box>
    </Flex>
  );
};

export default Navbar;
