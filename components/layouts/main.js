import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../navbar.js";
import { useRouter } from "next/router.js";

const Main = ({children, router}) => {
    const {asPath} = useRouter
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Umut Arslan - Home Page</title>
            </Head>

            <Navbar path={asPath}/>
            
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
