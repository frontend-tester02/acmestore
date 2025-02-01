import { IProduct } from '@/app.types'
import Image from 'next/image'
import React from 'react'

interface Props extends IProduct {
	quantity: number
	selectedColor?: string
	selectedSize?: string
}

function ShippingProductCart(cart: Props) {
	return (
		<>
			<div className='overflow-auto'>
				<div className='flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700'>
					<div className='relative flex w-full flex-row  justify-between px-1 py-4'>
						<div className='absolute z-30 -ml-1 -mt-3 rounded-full'>
							<div className='flex size-[30px] items-center justify-center rounded-full bg-neutral-500'>
								{cart.quantity}
							</div>
						</div>
						<div className='flex flex-row'>
							<div
								className='relative mr-2 size-16 overflow-hidden rounded-md border border-neutral-300 
                        bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800'
							>
								<Image
									src={cart.previewImage}
									alt={cart.title}
									width={70}
									height={70}
									className='size-full object-cover'
								/>
							</div>
							<div className='flex flex-1 flex-col text-base'>
								<span>{cart.title}</span>
								<p className='text-sm text-neutral-500 dark:text-neutral-400'>
									{cart.selectedColor}
									{cart.selectedColor && cart.selectedSize ? ' / ' : ''}
									{cart.selectedSize}
								</p>
							</div>
						</div>
						<div className='flex h-16 flex-col justify-between'>
							<p className='flex justify-end space-y-2 text-right text-sm'>
								{cart.price.toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}{' '}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShippingProductCart
