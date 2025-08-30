'use client'

import {
    Box,
    Container,
    Flex,
    Heading,
    Button,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useTranslations } from 'next-intl'

function LandingPageHeader() {
    const t = useTranslations('home')

    return (
        <Box
            as="header"
            bg="bg.canvas"
            borderBottom="1px solid"
            borderBottomColor="border.subtle"
            py={4}
            position="sticky"
            top={0}
            zIndex={1000}
        >
            <Container maxW="container.xl">
                <Flex align="center">
                    <Heading
                        as="h1"
                        size="lg"
                        color="brand.primary"
                        fontWeight="bold"
                        mr="auto"
                    >
                        {t('title')}
                    </Heading>

                    <HStack spacing={4}>
                        <Button
                            colorScheme="primary"
                            variant="outline"
                            size="sm"
                        >
                            Login
                        </Button>

                        {/* Language Menu */}
                        <Menu>
                            <MenuButton
                                as={Button}
                                rightIcon={<ChevronDownIcon />}
                                size="sm"
                                variant="ghost"
                                color="text.secondary"
                                _hover={{
                                    color: 'text.primary',
                                    bg: 'interactive.hover',
                                }}
                                minW="70px"
                            >
                                🇭🇷 HR
                            </MenuButton>
                            <MenuList
                                bg="bg.canvas"
                                borderColor="border.subtle"
                                boxShadow="lg"
                            >
                                <MenuItem
                                    _hover={{ bg: 'interactive.hover' }}
                                    _focus={{ bg: 'interactive.hover' }}
                                >
                                    <Text>🇭🇷 Hrvatski</Text>
                                </MenuItem>
                                <MenuItem
                                    _hover={{ bg: 'interactive.hover' }}
                                    _focus={{ bg: 'interactive.hover' }}
                                >
                                    <Text>🇬🇧 English</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default LandingPageHeader
