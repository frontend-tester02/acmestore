'use client'
import { saveShippingInfo } from '@/actions/shipping.action'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { shoppingCartSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { MessageCircleWarning } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function ShippingInfo() {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof shoppingCartSchema>>({
		resolver: zodResolver(shoppingCartSchema),
		defaultValues: {},
	})

	function onSubmit(values: z.infer<typeof shoppingCartSchema>) {
		setIsLoading(true)
		const res = saveShippingInfo(values).finally(() => setIsLoading(false))

		const promise = res

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Infromation saved successfully!',
			error: 'Something went wrong saved information!',
		})
	}
	return (
		<>
			<div className='flex flex-col gap-2'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
						<div className='flex flex-col pt-2'>
							<h1 className='font-roboto text-2xl font-bold'>Contact</h1>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Email <span className='text-blue-500'>*</span>
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className='bg-secondary'
												placeholder='Email adress'
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Phone Number <span className='text-blue-500'>*</span>
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className='bg-secondary'
												placeholder='Phone number...'
												type='number'
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className='flex flex-col pt-2'>
							<h1 className='font-roboto text-2xl font-bold'>
								Shipping Address
							</h1>
							<FormField
								control={form.control}
								name='country'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Country <span className='text-blue-500'>*</span>
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className='bg-secondary'
												placeholder='Enter country name'
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className='grid grid-cols-2 gap-2 pt-1'>
								<FormField
									control={form.control}
									name='firstName'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												First Name <span className='text-blue-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													className='bg-secondary'
													placeholder='First name'
													disabled={isLoading}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='lastName'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Last Name <span className='text-blue-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													className='bg-secondary'
													placeholder='Last name'
													disabled={isLoading}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name='address'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Address <span className='text-blue-500'>*</span>
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className='bg-secondary'
												placeholder='Enter address'
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className='mb-2 flex items-center gap-1 pt-2 font-roboto text-sm'>
								<MessageCircleWarning size={'18'} />
								<p>Add a house number if you have one</p>
							</div>

							<FormField
								control={form.control}
								name='address2'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Appartment or street{' '}
											<span className='text-blue-500'>*</span>
										</FormLabel>
										<FormControl>
											<Input
												{...field}
												className='bg-secondary'
												placeholder='Appartment, suite, etc.'
												disabled={isLoading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className='grid grid-cols-3 gap-2'>
								<FormField
									control={form.control}
									name='city'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												City <span className='text-blue-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													className='bg-secondary'
													placeholder='City'
													disabled={isLoading}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='state'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												State <span className='text-blue-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													className='bg-secondary'
													placeholder='State'
													disabled={isLoading}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='zipCode'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Zip Code <span className='text-blue-500'>*</span>
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													className='bg-secondary'
													placeholder='Zip code'
													type='number'
													disabled={isLoading}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<Button type='submit' className='mt-3' disabled={isLoading}>
								Save
							</Button>
							<Link href={'/shopping/shipping'}>
								<Button>Continue to Shippping</Button>
							</Link>
						</div>
					</form>
				</Form>
			</div>
		</>
	)
}

export default ShippingInfo
