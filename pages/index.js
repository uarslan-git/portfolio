import { Box, Container, Heading } from "@chakra-ui/layout";

const Page = () => {
    return (
        <div>
            <Box borderRadius={"lg"} bg="red" p={3} mb={6} alignContent={"center"}>
                Hello, I&apos;m a full-stack developer, focusing on Machine Learning and Pentesting based in Germany!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading size={"lg"} variant={"page-title"}>
                        Umut Arslan
                    </Heading>
                    <p>Digital Craftzman ( Artist / Developer / Designer) </p>
                </Box>
            </Box>
        </div>
    )
}

export default Page
