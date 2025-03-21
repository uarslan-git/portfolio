import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar'

const Layout = ({router, children}) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, intial-scale=1"/>
        <title>Umut Arslan - Website</title>
      </Head>
      <Navbar/>
    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
    </Box>
  )
}

export default Layout