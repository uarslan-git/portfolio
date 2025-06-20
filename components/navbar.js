import { Box, Container, Flex, Heading, Link, Stack } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Logo from "./logo.js"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
import { IconButton } from "@chakra-ui/button"
import { HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.900")
    return (
        <Link
            p={2}
            bg={active ? "glassTeal" : undefined}
            color={active ? "#202023" : inactiveColor}
            href={href}
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
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display={"flex"}
                p={2}
                maxW={"container.md"}
                wrap="wrap"
                alignContent={"center"}
                justifyContent={"space-between"}
            >
                <Flex alignContent={"center"} mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alighItems="center"
                    flexGrow={1}
                >
                    <LinkItem href={"/works"} path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href={"/posts"} path={path}>
                        posts
                    </LinkItem>
                </Stack>
                <Box flex={1} align={"right"}>
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant={"outline"}
                                aria-label="Options]"
                            ></MenuButton>
                            <MenuList>
                                <Link href={"/works"} passHref>
                                    <MenuItem>Works</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
