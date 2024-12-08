'use client'
import { Button } from '@/components/ui/button'
import { sellerNavLinks } from '@/constants'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar() {
	const pathname = usePathname()
	return (
		<div className='fixed inset-0 mt-[10vh] h-[90vh] w-[300px] max-md:w-24'>
			<div className='mt-2 px-4 max-md:px-2'>
				<div className='flex flex-col space-y-3'>
					{sellerNavLinks.map(item => (
						<Link key={item.route} href={item.route}>
							<Button
								className='flex w-full justify-start gap-2 max-md:w-fit max-md:justify-center'
								variant={pathname.slice() === item.route ? 'default' : 'ghost'}
							>
								<item.icon className='size-5 text-muted-foreground' />
								<span className='max-md:hidden'>{item.label}</span>
							</Button>
						</Link>
					))}
					<Link href={'/'}>
						<Button
							className='flex w-full justify-start gap-2 max-md:w-fit max-md:justify-center md:hidden'
							variant={'destructive'}
						>
							<LogOut className='size-5 text-muted-foreground' />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
