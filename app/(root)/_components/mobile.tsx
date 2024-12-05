'use client'

import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { AlignCenter } from 'lucide-react'
import Link from 'next/link'
import GlobalSearch from './global-search'

function Mobile() {
	return (
		<Sheet>
			<SheetTrigger asChild className='md:hidden'>
				<Button
					size={'icon'}
					variant={'ghost'}
					aria-label='mobile-hamburger-menu'
				>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SheetHeader>
					<Logo />
					<Separator />
				</SheetHeader>
				<div className='mt-4 flex flex-col space-y-3'>
					<GlobalSearch />
					{navLinks.map(nav => (
						<Link
							href={`/${nav.route}`}
							key={nav.route}
							className='flex h-12 cursor-pointer items-center gap-2 rounded-md px-3 transition-colors hover:bg-blue-400/20'
						>
							<span>{nav.name}</span>
						</Link>
					))}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
