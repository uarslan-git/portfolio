import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navbar from "../navbar.js";

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width"/>
                <title>Umut Arslan - Home Page</title>
            </Head>

            <Navbar/>
            
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
