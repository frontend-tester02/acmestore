'use client'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { products, sortProducts } from '@/constants'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function SelectProducts() {
	const pathname = usePathname()
	const router = useRouter()
	return (
		<>
			<div className='mb-4 px-4 max-md:flex md:hidden lg:hidden'>
				<Select onValueChange={value => router.push(value)}>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Choose product' />
					</SelectTrigger>
					<SelectContent className='flex flex-col space-y-1'>
						{products.map(item => (
							<Link href={item.route} key={item.route}>
								<Button
									className='flex w-full justify-start gap-2'
									variant={
										pathname.slice(3) === item.route ? 'secondary' : 'ghost'
									}
								>
									<SelectItem value={item.route}>{item.name}</SelectItem>
								</Button>
							</Link>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className='px-4 max-md:flex md:hidden lg:hidden'>
				<Select>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Sort by' />
					</SelectTrigger>
					<SelectContent>
						{sortProducts.map(item => (
							<Link href={item.label} key={item.label}>
								<Button
									className='flex w-full justify-start gap-2'
									variant={
										pathname.slice(3) === item.label ? 'secondary' : 'ghost'
									}
								>
									<SelectItem value={item.name}>{item.name}</SelectItem>
								</Button>
							</Link>
						))}
					</SelectContent>
				</Select>
			</div>
		</>
	)
}

export default SelectProducts
