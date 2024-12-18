'use client'

import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { navLinks } from '@/constants'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'

function Footer() {
	return (
		<div className='relative inset-x-0 z-50 mt-12 bg-secondary  pt-12 max-md:px-4 md:px-4'>
			<div className='container mx-auto max-w-7xl pb-12'>
				<div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
					<div className='flex flex-col space-y-3 md:col-span-2'>
						<Logo />
						<p>Online shopping store to buy everything</p>
					</div>

					<div className='flex flex-col space-y-3'>
						<h1 className='font-roboto text-3xl'>Pages</h1>
						<div className='flex flex-col space-y-3 pt-6'>
							{navLinks.map(item => (
								<Link
									key={item.route}
									href={`/${item.route}`}
									className='font-medium transition-all hover:text-blue-500 hover:underline'
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-3'>
						<h1 className='font-roboto text-3xl'>Contacts</h1>
						<div className='flex flex-col space-y-3 pt-6'>
							<div className='flex items-center space-x-3'>
								<PhoneCall size={20} />
								<div className='flex flex-col space-y-1'>
									<a
										href='tel:+821021154633'
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
									>
										+82 10 2115 4633
									</a>
									<Separator className='dark:bg-gray-500' />
									<a
										href='tel:+998990869744'
										className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
									>
										+998 99 086-97-44
									</a>
								</div>
							</div>

							<div className='flex items-center space-x-3'>
								<Mail size={20} />
								<a
									href='shokhrukhnuriddinov@gmail.com'
									className='text-sm hover:text-blue-500 hover:underline dark:hover:text-blue-300'
								>
									shokhrukhnuriddinov@gmail.com
								</a>
							</div>

							<div className='flex items-center space-x-3'>
								<MapPin size={20} />
								<span className='text-sm'>Seoul, South Korea</span>
							</div>
						</div>
					</div>

					<div className='flex flex-col space-y-3'></div>
				</div>

				<div className='pt-4 text-center'>
					<Separator className='mb-3 dark:bg-gray-500' />
					<p>© {new Date().getFullYear()}. All rights reserved</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
