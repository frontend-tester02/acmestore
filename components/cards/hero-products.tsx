import { getProducts } from '@/actions/product.action'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function HeroProducts() {
	const { userId } = await auth()
	const products = await getProducts(userId!)
	return (
		<>
			{products.slice(1, 3).map(item => (
				<Link key={item.title} href={'/'} className='relative mb-2 block'>
					<div
						className='group relative flex items-center justify-center gap-4 overflow-hidden
            rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-secondary dark:hover:border-blue-600'
					>
						<Image
							src={item.previewImage}
							alt={item.title}
							width={295}
							height={200}
							className='relative object-contain transition duration-300 ease-in-out
                         hover:border-blue-500 group-hover:scale-105'
						/>

						<div className='absolute bottom-0 left-0 flex px-4 pb-4'>
							<div
								className='flex items-center justify-end rounded-full border bg-white/70 p-1 text-xs font-semibold
                        text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'
							>
								<h3 className='mr-4 line-clamp-2 grow pl-2'>{item.title}</h3>
								<p className='rounded-full bg-blue-600 p-2 font-inter text-white'>
									{item.price.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
									<span className='ml-1'>USD</span>
								</p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</>
	)
}

export default HeroProducts
