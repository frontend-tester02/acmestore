import { getProducts } from '@/actions/product.action'
import UserProductCard from '@/components/cards/user-product.card'
import Header from '@/components/shared/header'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

async function Page() {
	const { userId } = await auth()
	const result = await getProducts({ clerkId: userId! })
	return (
		<>
			<Header
				title='Latest products'
				description='Here are your latest products'
			/>
			<div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{result.products.map(item => (
					<UserProductCard
						key={item.title}
						product={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>
		</>
	)
}

export default Page
