import type { Metadata } from 'next'
import './globals.css'
import { ChildProps } from '@/types'
import { Roboto, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: '--font-inter',
})

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
})

export const metadata: Metadata = {
	title: 'Acme Store',
	description: 'Acme online shopping store',
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${inter.variable} ${roboto.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
