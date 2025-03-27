import { HamburgerIcon } from "@chakra-ui/icons"
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import Logo from "./logo"

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900")
  return (
    <Link
      p={1}
      bg={active ? "teal" : undefined}
      color={active ? "#202023" : inactiveColor}
    >
      {children}
    </Link>
  )
}

const Navbar = (props) => {
  const { path } = props
  return (
    <Box
      position={"fixed"}
      as="nav"
      w={"100%"}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display={"flex"}
        p={2}
        maxW={"container.md"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"} mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems={"center"}
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <LinkItem href="/works" path={path}>
                  <MenuItem as={Link}>Works</MenuItem>
                </LinkItem>
                <LinkItem href="/posts" path={path}>
                  <MenuItem as={Link}>Posts</MenuItem>
                </LinkItem>
                <LinkItem href="/about" path={path}>
                  <MenuItem as={Link}>About</MenuItem>
                </LinkItem>
                <LinkItem href="/contact" path={path}>
                  <MenuItem as={Link}>Contact</MenuItem>
                </LinkItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
