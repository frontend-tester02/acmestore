'use client'
import { Button } from '@/components/ui/button'
import { products } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SidebarLeft() {
	const pathname = usePathname()
	return (
		<>
			<div
				className='fixed inset-y-0 left-0 -mb-4 mt-14 w-[170px] gap-4 border-l bg-gradient-to-b from-background to-secondary 
        p-4 max-md:hidden max-md:w-full max-md:px-2'
			>
				<div className='flex flex-col space-y-1'>
					{products.map(item => (
						<Link href={item.route} key={item.route}>
							<Button
								className='flex w-full justify-start gap-2 max-md:w-fit max-md:justify-center'
								variant={
									pathname.slice(3) === item.route ? 'secondary' : 'ghost'
								}
							>
								<span>{item.name}</span>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

export default SidebarLeft
