import { getProducts } from '@/actions/product.action'
import ReviewCard from '@/components/cards/review.card'
import SellerProductCard from '@/components/cards/seller-product.card'
import { ConsumerChart } from '@/components/charts/consumer.chart'
import { SalesChart } from '@/components/charts/sales-chart'
import { StatisticsChart } from '@/components/charts/statistic.chart'
import Header from '@/components/shared/header'

async function Page() {
	const products = await getProducts()

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
				{products.slice(0, 3).map(item => (
					<SellerProductCard
						key={item._id}
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
