import { getProducts } from '@/actions/product.action'
import ReviewCard from '@/components/cards/review.card'
import SellerProductCard from '@/components/cards/seller-product.card'
import StatisticsCard from '@/components/cards/statistic.card'
import Header from '@/components/shared/header'
import { auth } from '@clerk/nextjs/server'
import { ShoppingBag } from 'lucide-react'

async function Page() {
	const { userId } = await auth()
	const result = await getProducts({ clerkId: userId! })

	return (
		<>
			<Header title='Dashboard' description='Welcome to your dashboard' />

			<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<StatisticsCard
					label='Total products'
					value={result.totalProducts.toString()}
					Icon={ShoppingBag}
				/>
				<StatisticsCard
					label='Total products'
					value={result.totalProducts.toString()}
					Icon={ShoppingBag}
				/>
				<StatisticsCard
					label='Total products'
					value={result.totalProducts.toString()}
					Icon={ShoppingBag}
				/>
			</div>

			<Header
				title='Latest products'
				description='Here are your latest products'
			/>

			<div className='mt-4 grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
				{result.products.slice(0, 3).map(item => (
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
