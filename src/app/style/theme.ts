import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        heading: 'var(--font-inter)',
        body: 'var(--font-inter)',
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        brand: {
            50: '#e6fffa',
            100: '#b3f5f0',
            200: '#81e6d9',
            300: '#4fd1c7',
            400: '#38b2ac',
            500: '#319795',
            600: '#2c7a7b',
            700: '#285e61',
            800: '#234e52',
            900: '#1d4044',
        },
        primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
        },
        secondary: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
        },
    },
    semanticTokens: {
        colors: {
            // Backgrounds
            'bg.canvas': {
                default: 'white',
                _dark: 'gray.900',
            },
            'bg.surface': {
                default: 'gray.50',
                _dark: 'gray.800',
            },
            'bg.muted': {
                default: 'gray.100',
                _dark: 'gray.700',
            },
            'bg.subtle': {
                default: 'gray.25',
                _dark: 'gray.750',
            },

            // Text colors
            'text.primary': {
                default: 'gray.900',
                _dark: 'gray.100',
            },
            'text.secondary': {
                default: 'gray.600',
                _dark: 'gray.400',
            },
            'text.muted': {
                default: 'gray.500',
                _dark: 'gray.500',
            },
            'text.accent': {
                default: 'primary.600',
                _dark: 'primary.400',
            },

            // Brand colors (semantic)
            'brand.primary': {
                default: 'primary.500',
                _dark: 'primary.400',
            },
            'brand.secondary': {
                default: 'brand.500',
                _dark: 'brand.400',
            },
            'brand.accent': {
                default: 'secondary.500',
                _dark: 'secondary.400',
            },

            // Border colors
            'border.subtle': {
                default: 'gray.200',
                _dark: 'gray.600',
            },
            'border.muted': {
                default: 'gray.300',
                _dark: 'gray.500',
            },
            'border.emphasis': {
                default: 'gray.400',
                _dark: 'gray.400',
            },

            // Interactive states
            'interactive.hover': {
                default: 'gray.100',
                _dark: 'gray.700',
            },
            'interactive.pressed': {
                default: 'gray.200',
                _dark: 'gray.600',
            },
        },
    },
})
