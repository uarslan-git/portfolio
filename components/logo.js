import styled from "@emotion/styled";
import { Link, Text } from "@chakra-ui/layout";

const LogoBox = styled.span`
`

const Logo = () => {
    const footPrintImg = `Image`;

    return (
        <Link href="/">
            <LogoBox>
                <Text>
                    Umut Arslan
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
