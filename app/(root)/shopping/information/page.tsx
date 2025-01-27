'use client'
import ShippingInfo from './_components/shipping-info'
import ShippingProductCart from '../_components/shipping-product.cart'
import { useCart } from '@/hooks/use-cart'
import InfoBreadcrumb from '../_components/info-breadcrumb'

const breadcrumbItems = [
	{ label: 'information', href: '/shopping/information' },
	{ label: 'shipping' },
	{ label: 'checkout' },
]

function Page() {
	const { carts, cartsLength, totalPrice, taxes } = useCart()
	return (
		<div className='container mx-auto max-w-6xl pt-[8vh]'>
			<div className='mt-8 grid grid-cols-2 gap-4'>
				<div className='flex flex-col gap-2'>
					<div className='mb-2 flex items-center'>
						<InfoBreadcrumb
							items={breadcrumbItems}
							textColor='dark:text-white capitalize'
						/>
					</div>
					<ShippingInfo />
				</div>

				<div className='mt-10 flex flex-col'>
					{carts.map(cart => (
						<ShippingProductCart key={cart._id} {...cart} />
					))}
					<div className='mt-4 flex flex-col gap-2'>
						<div className='flex items-center justify-between'>
							<p>Subtotal * {cartsLength()} items</p>
							<p>
								{totalPrice().toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<p>Taxes</p>
							<p>
								{taxes().toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<p>Shipping</p>
							<p>FREE</p>
						</div>
						<div className='mt-2 flex items-center justify-between'>
							<p className='text-xl font-bold'>Total</p>
							<p className='text-xl font-bold'>
								<span className='mr-1 text-sm font-medium opacity-80'>
									USD{' '}
								</span>
								{(totalPrice() + taxes()).toLocaleString('en-US', {
									style: 'currency',
									currency: 'USD',
								})}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
