import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layouts/main'

const Website = ({Component, pageProps, router}) => {
  return (
    <ChakraProvider>
        <Layout router={router}>
            <Component {...pageProps} key={router.pathname} />
        </Layout>
      </ChakraProvider>
  )
}

export default Website