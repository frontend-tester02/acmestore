'use client'

import { updateProduct } from '@/actions/product.action'
import { IProduct } from '@/app.types'
import FillLoading from '@/components/shared/fill-loading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import UseToggleEdit from '@/hooks/use-toggle-edit'
import { ProductFieldsSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function ProductFields(product: IProduct) {
	const { state, onToggle } = UseToggleEdit()
	return (
		<Card>
			<CardContent className='relative p-2'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Product Name</span>
					<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
						{state ? <X /> : <Edit2 />}
					</Button>
				</div>

				<Separator className='my-3' />

				{state ? (
					<Forms product={product} onToggle={onToggle} />
				) : (
					<div className='flex flex-col space-y-2'>
						<div className='flex items-center gap-2'>
							<span className='font-roboto font-bold text-muted-foreground'>
								Name:
							</span>
							<span className='font-medium'>{product.title}</span>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default ProductFields

interface FormProps {
	product: IProduct
	onToggle: () => void
}

function Forms({ product, onToggle }: FormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	const form = useForm<z.infer<typeof ProductFieldsSchema>>({
		resolver: zodResolver(ProductFieldsSchema),
		defaultValues: {
			title: product.title,
		},
	})

	const onSubmit = (values: z.infer<typeof ProductFieldsSchema>) => {
		setIsLoading(true)
		const promise = updateProduct(product._id, values, pathname)
			.then(() => onToggle())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated!',
			error: 'Something went wrong!',
		})
	}
	return (
		<>
			{isLoading && <FillLoading />}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input {...field} disabled={isLoading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type='submit' disabled={isLoading}>
						Save
					</Button>
				</form>
			</Form>
		</>
	)
}
