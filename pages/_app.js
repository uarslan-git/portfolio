import Layout from "../components/layouts/main";
import { read } from "node:fs";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"; // Use ChakraProvider

const config = {
  initialColorMode: "dark", 
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
