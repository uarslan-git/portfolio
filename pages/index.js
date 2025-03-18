import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Box bg="red" borderRadius={8} p={3} mb={6} textAlign={'center'}>
        Hello, I&apos;m a full-stack developer based in Germany
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Umut Arslan
          </Heading>
          <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Home