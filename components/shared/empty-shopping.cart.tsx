import { ShoppingCart } from 'lucide-react'
import React from 'react'

function EmptyShoppingCart() {
	return (
		<>
			<div className='mt-20 flex flex-col items-center space-y-3'>
				<ShoppingCart className='size-20' />
				<h1 className='font-roboto text-2xl font-bold'>Your cart is empty.</h1>
			</div>
		</>
	)
}

export default EmptyShoppingCart
