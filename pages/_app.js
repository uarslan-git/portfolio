import Layout from "../components/layouts/main"
import { ChakraProvider, extendTheme } from "@chakra-ui/react" // Use ChakraProvider
import theme from "../components/theme.js"
import { useRouter } from "next/router.js"

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}
