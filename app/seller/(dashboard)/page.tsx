import { getProducts } from '@/actions/product.action'
import ReviewCard from '@/components/cards/review.card'
import SellerProductCard from '@/components/cards/seller-product.card'
import { ConsumerChart } from '@/components/charts/consumer.chart'
import { SalesChart } from '@/components/charts/sales-chart'
import StatisticsChart from '@/components/charts/statistic.chart'
import Header from '@/components/shared/header'
import { auth } from '@clerk/nextjs/server'

async function Page() {
	const { userId } = await auth()
	const products = await getProducts(userId!)

	return (
		<>
			<Header title='Dashboard' description='Welcome to your dashboard' />

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
				{products.slice(0, 3).map(item => (
					<SellerProductCard
						key={item.title}
						product={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>

			<Header title='Reviews' description='Here are your latest reviews' />
			<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<ReviewCard />
			</div>
		</>
	)
}

export default Page
