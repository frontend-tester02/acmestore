'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'

function ModeToggle() {
	const [mount, setMount] = useState(false)
	const { setTheme, resolvedTheme } = useTheme()

	useEffect(() => setMount(true), [])
	return mount && resolvedTheme === 'dark' ? (
		<Button
			size={'icon'}
			variant={'outline'}
			onClick={() => setTheme('light')}
			aria-label='mode-toggle-to-light'
		>
			<Sun />
		</Button>
	) : (
		<Button
			size={'icon'}
			onClick={() => setTheme('dark')}
			variant={'outline'}
			aria-label='mode-toggle-to-dark'
		>
			<Moon />
		</Button>
	)
}

export default ModeToggle
