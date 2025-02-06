'use client'
import { UserProfile } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { dark } from '@clerk/themes'

function Page() {
	const { resolvedTheme } = useTheme()
	return (
		<>
			<UserProfile
				routing='hash'
				appearance={{
					baseTheme: resolvedTheme === 'dark' ? dark : undefined,
					variables: {
						colorBackground: resolvedTheme === 'dark' ? '#020817' : '#fff',
					},
				}}
			/>
		</>
	)
}

export default Page
