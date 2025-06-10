import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../navbar.js";
import { useRouter } from "next/router.js";
import {Menu} from "../own/MenuContext.js";
import { MenuButton } from "../own/MenuButton.js";
import { MenuList } from "../own/MenuList.js";
import { MenuItem } from "../own/MenuItem.js";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "../own/IconButton.js";
import Link from "next/link.js";

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Umut Arslan - Home Page</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>

            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} aria-label="Options">
                    {/* Button content if needed */}
                </MenuButton>
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem>About</MenuItem>
                    </Link>
                    <Link href="/works" passHref>
                        <MenuItem>Works</MenuItem>
                    </Link>
                    <Link href="/posts" passHref>
                        <MenuItem>Posts</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    )
}

export default Main
