'use client'

import { Button } from '@/components/ui/button'
import { sortProducts } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function SidebarRight() {
	const pathname = usePathname()
	return (
		<>
			<div
				className='fixed inset-y-0 right-0 mt-14 w-[200px] border-l bg-gradient-to-b from-background to-secondary p-4 max-md:w-20 max-md:px-2 
        '
			>
				<div className='flex flex-col'>
					{sortProducts.map(item => (
						<Link href={item.label} key={item.label}>
							<Button
								className='flex w-full justify-start gap-2 max-md:w-fit max-md:justify-center'
								variant={
									pathname.slice(3) === item.label ? 'secondary' : 'ghost'
								}
							>
								<span className='max-md:hidden'>{item.name}</span>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}

export default SidebarRight
