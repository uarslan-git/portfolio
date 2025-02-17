import styled from "@emotion/styled";
import Link from "next/link";

const LogoBox = styled.span`
font-weight: bold;
font-size: 11px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover h1 {
transform: rotate(20deg);
}
`
const Logo = () => {
    return (
        <Link href="/">
            <LogoBox>
                <h1>Umut Arslan</h1>
            </LogoBox>
        </Link>
    )
}

export default Logo