import ProductCard from '@/components/cards/product-card'
import React from 'react'

function AllProducts() {
	return (
		<div className='container mx-auto mt-8 max-w-6xl'>
			<h2 className='font-roboto text-xl font-bold'>
				Showing {''} <span>19</span> total products
			</h2>

			<div className='mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				<ProductCard />
			</div>
		</div>
	)
}

export default AllProducts
