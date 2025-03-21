import { Link, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
height: 30px;
line-height: 20px;
align-items: center;
padding: 10px;

&:hover {
  transform: rotate(20deg);
  transition: transform 0.5s;
}
`

const Logo = () => {
  return (
    <Link href='/'>
      <LogoBox>
        {/* Inser Logo here */}
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Umut Arslan
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo