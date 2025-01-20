'use client'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { categoryProducts, sortProducts } from '@/constants'
import { formUrlQuery } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function SelectProducts() {
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
			<div className='mb-4 px-4 max-md:flex md:hidden lg:hidden'>
				<Select onValueChange={onUpdateParams}>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Choose product' />
					</SelectTrigger>
					<SelectContent className='flex flex-col space-y-1'>
						{categoryProducts.map(item => (
							<Button
								key={item.name}
								className='flex w-full justify-start gap-2'
								variant={
									pathname.slice(3) === item.label ? 'secondary' : 'ghost'
								}
							>
								<SelectItem value={item.name}>{item.label}</SelectItem>
							</Button>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className='px-4 max-md:flex md:hidden lg:hidden'>
				<Select onValueChange={onUpdateParams}>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Sort by' />
					</SelectTrigger>
					<SelectContent>
						{sortProducts.map(item => (
							<Button
								key={item.name}
								className='flex w-full justify-start gap-2'
								variant={
									pathname.slice(3) === item.label ? 'secondary' : 'ghost'
								}
							>
								<SelectItem value={item.name}>{item.label}</SelectItem>
							</Button>
						))}
					</SelectContent>
				</Select>
			</div>
		</>
	)
}

export default SelectProducts
