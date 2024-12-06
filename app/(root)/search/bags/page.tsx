import ProductCard from '@/components/cards/product-card'
import Header from '@/components/shared/header'
import React from 'react'

function Page() {
	return (
		<div className='px-4 pb-4'>
			<Header title='Bags' />

			<div className='container mt-2 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<ProductCard />
			</div>
		</div>
	)
}

export default Page
