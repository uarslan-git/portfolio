import { Box, Container, Flex, Heading, Link, useColorMode } from '@chakra-ui/react';
import React from 'react';
import Logo from './logo';

const LinkItem = ({href, path, children})=> {
  const active = href === path;
  const inactiveColor = useColorMode('gray.200', 'whiteAlpha.900');
  return (
    <Link 
    href={href}
    p={2}
    bg={active ? 'glassTeal' : 'undefined'}
    color={active ? '#202023' : inactiveColor}
    >
      {children}
    </Link>
  )
}

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
    position={'fixed'}
    as='nav'
    w={'100%'}
    {...props}
    >
      <Container>
        <Flex bg={'red'}>
          <Heading>
          <Logo/>
          </Heading>
      </Flex>
      </Container>
    </Box>
  )
}

export default Navbar