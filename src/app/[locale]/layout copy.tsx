import { hasLocale, NextIntlClientProvider } from 'next-intl'

import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { inter } from '@/assets/fonts/font'
import { Providers } from '@/providers'

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <NextIntlClientProvider>
                    <Providers>{children}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
