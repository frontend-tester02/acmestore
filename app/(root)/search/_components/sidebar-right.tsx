'use client'

import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { sortProducts } from '@/constants'
import { formUrlQuery } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function SidebarRight() {
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()

	const onUpdateParams = (value: string) => {
		const newUrl = formUrlQuery({
			value,
			key: 'filter',
			params: searchParams.toString(),
		})

		router.push(newUrl)
	}
	return (
		<>
			<div
				className='fixed inset-y-0 right-0 mt-14 w-[170px] border-l bg-gradient-to-b from-background to-secondary p-4 max-md:hidden max-md:w-20 max-md:px-2 
        '
			>
				<div className='flex flex-col'>
					<Select onValueChange={onUpdateParams}>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Choose product' />
						</SelectTrigger>
						<SelectContent className='flex flex-col space-y-1'>
							{sortProducts.map(item => (
								<Button
									key={item.name}
									className='flex w-full justify-start gap-2'
									variant={
										pathname.slice(3) === item.label ? 'secondary' : 'ghost'
									}
								>
									<SelectItem
										value={item.name}
										key={item.name}
										className='capitalize'
									>
										{item.label}
									</SelectItem>
								</Button>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
		</>
	)
}

export default SidebarRight
