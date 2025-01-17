'use client'
import { updateUser } from '@/actions/user.action'
import { IUser } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { profileSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function Account(user: IUser) {
	const { bio, phone, job } = user

	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	const form = useForm<z.infer<typeof profileSchema>>({
		resolver: zodResolver(profileSchema),
		defaultValues: { bio, job, phone },
	})

	const onSubmit = (values: z.infer<typeof profileSchema>) => {
		setIsLoading(true)
		const promise = updateUser({
			clerkId: user.clerkId,
			updatedData: values,
			path: pathname,
		}).finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated!',
			error: 'Something went wrong. Please try again.',
		})
	}

	return (
		<Card className='ml-6 max-w-4xl'>
			<CardContent className='relative p-6'>
				{isLoading && <FillLoading />}
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
						<div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2'>
							<FormField
								control={form.control}
								name='job'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Your job</FormLabel>
										<FormControl>
											<Input
												{...field}
												className='bg-secondary'
												placeholder='e.g. Write your job name'
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
										<FormLabel>Mobile phone</FormLabel>
										<FormControl>
											<Input
												{...field}
												className='bg-secondary'
												placeholder='e.g. +82 10 2115 4633'
												type='number'
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
							name='bio'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Bio</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											className='bg-secondary'
											placeholder='e.g. It is not a type, it is a joke!'
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Save</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default Account
