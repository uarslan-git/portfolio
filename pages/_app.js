import Layout from "../components/layouts/main"
import { ChakraProvider, extendTheme, ColorModeProvider} from "@chakra-ui/react" // Use ChakraProvider
import theme from "../libs/theme.js" 
import { useRouter } from "next/router.js"
import Fonts from "../components/fonts.js";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}
