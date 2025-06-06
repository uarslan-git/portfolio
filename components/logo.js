import styled from "@emotion/styled"
import { Link, Text } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/system"
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Image } from "@chakra-ui/react";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = `mock-${useColorModeValue("dark","white")}.png`

    return (
        <Link href="/">
            <LogoBox>
                <Image src={footPrintImg} width={5} alt="logo"/>
                <Text
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    fontFamily={"M_PLUS_Rounded_1c"}
                    fontWeight={"bold"}
                    ml={3}
                >
                    Umut Arslan
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
