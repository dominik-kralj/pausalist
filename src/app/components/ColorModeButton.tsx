import { IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function ColorModeButton() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
        />
    )
}

export default ColorModeButton
