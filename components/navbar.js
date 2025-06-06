import { Box, Container, Flex, Heading } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"
import Logo from "./logo.js";

const LinkItem = ({ href, path, children }) => {
    return <Link href={href}>{children}</Link>
}

const Navbar = (props) => {
    const { path } = props

    return (
        <Box
            position={"fixed"}
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container>
                <Flex>
                    <Heading>
                    <Logo/>
                    </Heading>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar
