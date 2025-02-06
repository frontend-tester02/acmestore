import { getProducts } from '@/actions/product.action'
import SellerProductCard from '@/components/cards/seller-product.card'
import StatisticsCard from '@/components/cards/statistic.card'
import Header from '@/components/shared/header'
import { auth } from '@clerk/nextjs/server'
import { Club, ShoppingBag } from 'lucide-react'
import React from 'react'
import { GrMoney } from 'react-icons/gr'

async function Page() {
	const { userId } = await auth()
	const result = await getProducts({ clerkId: userId! })
	return (
		<>
			<Header title='Dashboard' description='Welcome to your dashboard' />

			<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<StatisticsCard label='My products' value='10' Icon={ShoppingBag} />
				<StatisticsCard label='Expenses' value='$100' Icon={GrMoney} />
				<StatisticsCard label='Cards' value='10' Icon={Club} />
			</div>

			<Header
				title='Latest products'
				description='Here are your latest products'
			/>
			<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{result.products.slice(0, 3).map(item => (
					<SellerProductCard
						key={item.title}
						product={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>
		</>
	)
}

export default Page
