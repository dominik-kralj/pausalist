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
            color="text.secondary"
            _hover={{
                color: 'text.primary',
                bg: 'interactive.hover',
            }}
        />
    )
}

export default ColorModeButton
