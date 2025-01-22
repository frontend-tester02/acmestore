'use client'
import { IProduct } from '@/app.types'
import { useCart } from '@/hooks/use-cart'
import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

interface Props extends IProduct {
	quantity: number
	selectedColor?: string
	selectedSize?: string
}

function ShoppingCartCard(cart: Props) {
	const { increment, decrement, removeFromCart } = useCart()
	return (
		<>
			<div className='grow overflow-auto'>
				<div className='flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700'>
					<div className='relative flex w-full flex-row justify-between px-1 py-4'>
						<div className='absolute z-40 -ml-1 -mt-2'>
							<Button
								type='submit'
								aria-label='Remove product from cart'
								className='flex size-[20px] items-center justify-center rounded-full bg-neutral-500'
								onClick={() => removeFromCart(cart._id)}
							>
								<X />
							</Button>
						</div>
						<div className='flex flex-row'>
							<div
								className='relative mr-2 size-16 overflow-hidden rounded-md border border-neutral-300 
                        bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800'
							>
								<Image
									src={cart.previewImage}
									alt={cart.title}
									width={64}
									height={64}
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
							<div className='ml-auto flex h-9 flex-row items-center gap-4 rounded-full border border-neutral-200 p-1 dark:border-neutral-700'>
								<Minus
									className='transition-all hover:opacity-80 active:scale-125'
									role='button'
									onClick={() =>
										cart.quantity === 1
											? removeFromCart(cart._id)
											: decrement(cart._id)
									}
								/>

								<h1 className='font-roboto text-xl font-bold'>
									{cart.quantity}
								</h1>
								<Plus
									className='transition-all hover:opacity-80 active:scale-125'
									role='button'
									onClick={() => increment(cart._id)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShoppingCartCard
