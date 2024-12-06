'use client'
import HeroProducts from '@/components/cards/hero-products'
import AutoplayScrollbarItem from '@/components/shared/autoplay-scrollbar-item'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
	return (
		<>
			<div className='container mx-auto mt-20 grid min-h-[60vh] max-w-screen-2xl grid-cols-6 gap-4 px-4 max-md:grid-cols-1 '>
				<div className='col-span-4 gap-4 max-md:w-full'>
					<Link href={'/'} className='relative block'>
						<div
							className='group relative flex items-center justify-center overflow-hidden
						rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-secondary'
						>
							<Image
								src={'/products/t-shirts/t-shirt-1.avif'}
								alt='Image'
								width={600}
								height={400}
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='relative object-contain transition duration-300 ease-in-out
								 hover:border-blue-500 group-hover:scale-105'
							/>

							<div className='absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]'>
								<div
									className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold
								text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'
								>
									<h3 className='mr-4 line-clamp-2 grow pl-2'>
										Acme Circle T-Shirt
									</h3>
									<p className='rounded-full bg-blue-600 p-2 font-inter text-white'>
										$20.00
										<span className='ml-1'>USD</span>
									</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<div className='col-span-2 gap-4'>
					<HeroProducts />
				</div>
			</div>

			<div className='max-w-screen-2xl'>
				<AutoplayScrollbarItem />
			</div>
		</>
	)
}

export default Hero
