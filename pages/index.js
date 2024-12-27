import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
	return (
		<Container>
			<Box bg="red" borderRadius="lg" p={3} mb={6} textAlign="center">
				Hello, I&apos;m a freelance full-stack developer based in Germany!
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h5">
						Umut Arslan
					</Heading>
					<p>Digital Craftsman ( Developer / Machine Learning / Designer )</p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page