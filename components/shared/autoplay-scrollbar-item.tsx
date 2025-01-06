import React from 'react'
import { AutoplayScrollbar } from './autoplay-scrollbar'
import Link from 'next/link'
import Image from 'next/image'
import { getProducts } from '@/actions/product.action'
import { auth } from '@clerk/nextjs/server'

async function AutoplayScrollbarItem() {
	const { userId } = await auth()
	const result = await getProducts({ clerkId: userId! })
	return (
		<>
			<AutoplayScrollbar direction='horizontal' speed={70}>
				<div className='flex space-x-4 pb-4'>
					{result.products.slice(3).map((item, i) => (
						<div
							key={i}
							className='flex shrink-0 items-center justify-center rounded-lg'
						>
							<Link
								href={`/product/${item.slug}`}
								className='relative mb-2 block w-[500px] max-md:w-[300px] md:mt-2'
							>
								<div
									className='group relative flex  items-center justify-center  gap-4 overflow-hidden
						                    rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-secondary dark:hover:border-blue-600'
								>
									<Image
										src={item.previewImage}
										alt={item.title}
										width={300}
										height={200}
										className='relative object-contain transition duration-300 ease-in-out
									       hover:border-blue-500 group-hover:scale-105'
									/>

									<div className='absolute bottom-0 left-0 flex px-4 pb-4'>
										<div
											className='flex items-center justify-end rounded-full border bg-white/70 p-1 text-xs font-semibold
									       text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'
										>
											<h3 className='mr-4 line-clamp-2 grow pl-2'>
												{item.title}
											</h3>
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
						</div>
					))}
				</div>
			</AutoplayScrollbar>
		</>
	)
}

export default AutoplayScrollbarItem
