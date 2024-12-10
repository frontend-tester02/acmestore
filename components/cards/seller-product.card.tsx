import { IProduct } from '@/app.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'

interface Props {
	product: IProduct
}

function SellerProductCard({ product }: Props) {
	return (
		<Link href={`/seller/my-products/${product._id}`}>
			<div className='group flex flex-col space-y-2 rounded-md bg-background p-2'>
				<div className='relative h-52 w-full'>
					<Image
						src={product.previewImage}
						alt={product.title}
						fill
						className='rounded-md object-cover transition duration-300 ease-in-out group-hover:scale-105'
					/>
				</div>
				<div className='flex items-center justify-between px-2'>
					<h1 className='font-roboto text-2xl font-bold md:line-clamp-1'>
						{product.title}
					</h1>
					<Badge variant={product.published ? 'default' : 'destructive'}>
						{product.published ? 'Published' : 'Draft'}
					</Badge>
				</div>
			</div>
		</Link>
	)
}

export default SellerProductCard
