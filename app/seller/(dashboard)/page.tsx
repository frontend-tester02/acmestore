import ReviewCard from '@/components/cards/review.card'
import { ConsumerChart } from '@/components/charts/consumer.chart'
import { SalesChart } from '@/components/charts/sales-chart'
import { StatisticsChart } from '@/components/charts/statistic.chart'
import Header from '@/components/shared/header'
import { productItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

function Page() {
	return (
		<>
			<Header title='Dashboard' description='Welcome to your dashboard' />

			{/* <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<StatisticsCard label='Total products' value='100' Icon={ShoppingBag} />
				<StatisticsCard label='Total consumers' value='20' Icon={User} />
				<StatisticsCard label='Total sales' value='20' Icon={GrMoney} />
			</div> */}

			<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<StatisticsChart />
				<ConsumerChart />
				<SalesChart />
			</div>

			<Header
				title='Latest products'
				description='Here are your latest products'
			/>

			<div className='mt-4 grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
				{productItems.slice(0, 3).map(item => (
					<Link key={item.title} href={'/'} className='relative mb-2 block'>
						<div
							className='group relative flex items-center justify-center gap-4 overflow-hidden
					rounded-lg border border-neutral-200 bg-white hover:border-blue-600 dark:border-neutral-800 dark:bg-black dark:hover:border-blue-600'
						>
							<Image
								src={item.image}
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
										${item.price}
										<span className='ml-1'>USD</span>
									</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

			<Header title='Reviews' description='Here are your latest reviews' />
		</>
	)
}

export default Page
