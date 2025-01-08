import { getProducts } from '@/actions/product.action'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'

async function ProductCard() {
	const { userId } = await auth()
	const result = await getProducts({ clerkId: userId! })
	return (
		<>
			{result.products.map(item => (
				<div key={item._id} className='flex flex-col gap-2'>
					<div
						className='group relative flex items-center justify-center gap-4 overflow-hidden
					rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-secondary dark:hover:border-blue-600'
					>
						<Link
							key={item.title}
							href={`/product/${item.slug}`}
							className='relative mb-2 block'
						>
							<Image
								src={item.previewImage}
								alt={item.title}
								width={320}
								height={200}
								className='relative object-contain transition duration-300 ease-in-out
							hover:border-blue-500 group-hover:scale-105'
							/>
						</Link>

						<div className='absolute bottom-0 left-0 flex px-4 pb-4'>
							<div
								className='flex items-center justify-end rounded-full border bg-white/70 p-1 text-xs font-semibold
								text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'
							>
								<h3 className='mr-4 line-clamp-2 grow pl-2'>{item.title}</h3>
								<p className='rounded-full bg-blue-600 p-2 font-inter text-white'>
									$
									{item.price.toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD',
									})}
									<span className='ml-1'>USD</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default ProductCard
