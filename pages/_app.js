import Layout from "../components/layouts/main"
import { ChakraProvider, extendTheme } from "@chakra-ui/react" // Use ChakraProvider
import theme from "../components/theme.js"
import Head from "next/head"

export default function MyApp({ Component, pageProps, router}) {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
