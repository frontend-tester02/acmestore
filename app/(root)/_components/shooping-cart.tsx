import ShoppingCartCard from '@/components/cards/shopping-cart.card'
import EmptyShoppingCart from '@/components/shared/empty-shopping.cart'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/hooks/use-cart'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

function ShoopingCart() {
	const { carts, totalPrice, taxes } = useCart()
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size={'icon'} variant={'ghost'} aria-label='shopping-cart'>
					<ShoppingCart />
				</Button>
			</SheetTrigger>
			<SheetContent side={'right'}>
				<SheetHeader>
					<div className='flex items-center justify-between gap-2'>
						<h1 className='font-roboto text-2xl font-bold'>My Cart</h1>
					</div>
				</SheetHeader>
				{carts.length === 0 && (
					<div className='mt-4 flex flex-col items-center space-y-3'>
						<EmptyShoppingCart />
					</div>
				)}
				<div className='flex h-full flex-col justify-between overflow-hidden p-1'>
					<div className='my-3 flex flex-col space-y-3'>
						{carts.map(cart => (
							<ShoppingCartCard key={cart._id} {...cart} />
						))}
					</div>
					<div className='py-4 text-sm text-neutral-500 dark:text-neutral-400'>
						<div className='mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700'>
							<p>Subtotal</p>
							<p className='text-right text-base'>
								{totalPrice().toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</p>
						</div>
						<div className='mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700'>
							<p>Taxes</p>
							<p className='text-right text-base'>
								{taxes().toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</p>
						</div>
						<div className='mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700'>
							<p>Shipping</p>
							<p className='text-right text-base'>Calculated at Checkout</p>
						</div>
						<div className='mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700'>
							<p>Total (Tax inc)</p>
							<p className='text-right text-base'>
								{(totalPrice() + taxes()).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</p>
						</div>

						<Link href={'/shopping/cart'}>
							<Button className='w-full rounded-full bg-blue-500 p-3 text-center text-sm font-medium text-white opacity-90 hover:bg-blue-500 hover:opacity-100'>
								Proceed to Checkout
							</Button>
						</Link>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default ShoopingCart
