
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/layouts/main';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode='dark' />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    )
}

export default Website