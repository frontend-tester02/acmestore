'use client'

import Logo from '@/components/shared/logo'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GlobalSearch from './global-search'
import ModeToggle from '@/components/shared/mode-toggle'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Mobile from './mobile'

function Navbar() {
	const pathname = usePathname()
	return (
		<div className='fixed inset-0 z-40 h-16 bg-background/70 backdrop-blur-xl'>
			<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b px-2'>
				<div className='flex items-center gap-4'>
					<Mobile />
					<Logo />
					<div className='hidden items-center gap-3 border-l pl-2 md:flex'>
						{navLinks.map(nav => (
							<Link
								href={`/${nav.route}`}
								key={nav.route}
								className={cn(
									'font-medium transition-all hover:text-blue-500 hover:underline dark:hover:text-white-500',
									pathname === `/${nav.route}` && 'text-blue-500'
								)}
							>
								{nav.name}
							</Link>
						))}
					</div>
				</div>
				<div className='hidden gap-1 md:flex'>
					<GlobalSearch />
				</div>

				<div className='flex items-center gap-4'>
					<ModeToggle />
					<Button type='button' size={'icon'} variant={'outline'}>
						<ShoppingCart />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar