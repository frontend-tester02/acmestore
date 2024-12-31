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
import { priceSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function Price(product: IProduct) {
	const { state, onToggle } = UseToggleEdit()
	return (
		<Card>
			<CardContent className='relative p-2'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Change price</span>
					<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
						{state ? <X /> : <Edit2 />}
					</Button>
				</div>
				<Separator className='my-3' />
				{state ? (
					<Forms product={product} onToggle={onToggle} />
				) : (
					<div className='flex items-center gap-2'>
						<span className='self-start font-roboto font-bold text-muted-foreground'>
							Price:
						</span>
						<span className='line-clamp-3 font-medium'>
							{product.price.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
							})}
						</span>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default Price

interface FormProps {
	product: IProduct
	onToggle: () => void
}

function Forms({ product, onToggle }: FormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	const form = useForm<z.infer<typeof priceSchema>>({
		resolver: zodResolver(priceSchema),
		defaultValues: {
			price: `${product.price}`,
		},
	})

	const onSubmit = (values: z.infer<typeof priceSchema>) => {
		setIsLoading(true)
		const { price } = values
		const promise = updateProduct(product._id, { price: +price }, pathname)
			.then(() => onToggle())
			.finally(() => setIsLoading(false))
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfuly updated!',
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
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input {...field} disabled={isLoading} type='number' />
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
