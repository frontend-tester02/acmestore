'use client'
import { useCart } from '@/hooks/use-cart'
import InfoBreadcrumb from '../_components/info-breadcrumb'
import ShippingProductCart from '../_components/shipping-product.cart'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

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

					<div className='mb-2 mt-6 rounded-lg border dark:border-white'>
						<div className='flex items-center justify-between gap-2 p-2'>
							<h1 className='font-roboto font-bold opacity-75'>Contact</h1>
							<p className='text-sm'>shokhrukhnuriddinov@gmail.com</p>
							<Link
								href={'/shopping/information'}
								className='text-sm text-blue-500 underline'
							>
								Change
							</Link>
						</div>
						<Separator className='my-3' />
						<div className='flex items-center justify-between gap-2 p-2'>
							<h1 className='font-roboto font-bold opacity-75'>Ship to</h1>
							<p className='flex flex-wrap text-sm'>
								SEOUL SALON NYC, 서울, New York NY 10001, United States
							</p>
							<Link
								href={'/shopping/information'}
								className='text-sm text-blue-500 underline'
							>
								Change
							</Link>
						</div>
					</div>
					<h1 className='mt-2 font-roboto text-2xl'>Shipping method</h1>
					<div className='mt-2 rounded-lg border dark:border-white'>
						<div className='flex items-center justify-between gap-2 p-2'>
							<div className='flex flex-col'>
								<h1 className='font-roboto text-xl'>Economy</h1>
								<p className='text-sm opacity-75'>5 to 8 business days</p>
							</div>
							<p className='font-medium'>FREE</p>
						</div>
					</div>
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
