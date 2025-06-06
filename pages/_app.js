import Layout from "../components/layouts/main";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"; // Use ChakraProvider

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
