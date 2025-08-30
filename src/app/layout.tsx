import { inter } from './assets/fonts/font'
import { Providers } from './providers'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
