import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
	return (
		<>
			<div className='mt-12 bg-secondary pt-2'>
				<div className='container mx-auto max-w-7xl py-8'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
						<div className='col-span-2 space-y-4'>
							<Logo />
							<p className='text-muted-foreground'>
								Online clothes shooping website
							</p>
						</div>
						<div>
							<h3 className='mb-4 text-lg font-semibold'>Pages</h3>
							<ul className='space-y-2'>
								<li>
									<Link href='/' className='hover:text-primary'>
										Home
									</Link>
								</li>
								<li>
									<Link href='/all' className='hover:text-primary'>
										All
									</Link>
								</li>
								<li>
									<Link href='/shirts' className='hover:text-primary'>
										Shirts
									</Link>
								</li>
								<li>
									<Link href='/stikers' className='hover:text-primary'>
										Stikers
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className='mb-4 text-lg font-semibold'>Contacts</h3>
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
					</div>
					<Separator className='my-8 dark:bg-gray-500' />
					<div className='flex items-center justify-center'>
						<p className='text-sm text-muted-foreground'>
							© {new Date().getFullYear()}{' '}
							<Link
								href={'/'}
								className='cursor-pointer text-blue-500 hover:underline'
							>
								ACME STORE
							</Link>
							. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
