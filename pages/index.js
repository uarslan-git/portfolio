import { Box, Container, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Page = () => {
    return (
        <Container>
            <Box borderRadius={"lg"} bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} alignContent={"center"}>
                Hello, I&apos;m a full-stack developer, focusing on Machine Learning and Pentesting based in Germany!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading size={"lg"} variant={"page-title"}>
                        Umut Arslan
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer) </p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    display="flex"
                    justifyContent="center"
                >
                    <Box
                        boxSize="125px"
                        overflow="hidden"
                        borderRadius="full"
                        borderWidth={2}
                        borderColor="whiteAlpha.800"
                        display="inline-block"
                        position="relative"
                    >
                        <Image
                            src="picture.jpg"
                            alt="Profile picture"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            transform="scale(1.2)"
                            position="absolute"
                            top="10px"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
