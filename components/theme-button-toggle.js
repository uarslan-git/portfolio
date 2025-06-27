import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeButtonToggle = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("purple", "orange")}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            variant="solid"
            onClick={toggleColorMode}
        />
    )
}


export default ThemeButtonToggle;
