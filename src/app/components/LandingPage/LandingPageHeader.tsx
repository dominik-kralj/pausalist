'use client'

import {
    Box,
    Flex,
    Heading,
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ColorModeButton from '../ColorModeButton'

function LandingPageHeader() {
    return (
        <Box
            as="header"
            bg="bg.canvas"
            borderBottom="1px solid var(--chakra-colors-border-subtle)"
            p={4}
            position="sticky"
            top={0}
        >
            <Flex align="center">
                <Heading as="h1" size="lg" color="brand.primary" mr="auto">
                    Paušalist
                </Heading>

                <HStack spacing={4}>
                    <Button colorScheme="primary" variant="ghost" size="sm">
                        Login
                    </Button>

                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            size="sm"
                            variant="ghost"
                        >
                            HR
                        </MenuButton>
                        <MenuList
                            bg="bg.canvas"
                            borderColor="border.subtle"
                            boxShadow="lg"
                        >
                            <MenuItem>
                                <Text>Hrvatski</Text>
                            </MenuItem>

                            <MenuItem>
                                <Text>English</Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    <ColorModeButton />
                </HStack>
            </Flex>
        </Box>
    )
}

export default LandingPageHeader
