import styled from "@emotion/styled"
import { Link, Text } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/system"
import { M_PLUS_Rounded_1c } from "next/font/google";

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
    const footPrintImg = `Image`

    return (
        <Link href="/">
            <LogoBox>
                <Text
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    fontFamily={"M_PLUS_Rounded_1c"}
                    fontWeight={"bold"}
                >
                    Umut Arslan
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
