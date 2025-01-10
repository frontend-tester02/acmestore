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
	FormLabel,
} from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { categoryProducts } from '@/constants'
import UseToggleEdit from '@/hooks/use-toggle-edit'
import { selectFieldsSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function SelectFields(product: IProduct) {
	const { state, onToggle } = UseToggleEdit()
	return (
		<Card>
			<CardContent className='relative p-2'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Select fields</span>
					<Button size={'icon'} variant={'ghost'} onClick={onToggle}>
						{state ? <X /> : <Edit2 />}
					</Button>
				</div>
				<Separator className='my-3' />
				{state ? (
					<Forms product={product} onToggle={onToggle} />
				) : (
					<>
						<div className='flex items-center gap-2'>
							<span className='self-start font-roboto font-bold text-muted-foreground'>
								Category:
							</span>
							<span className='line-clamp-3 font-medium'>
								{product.category}
							</span>
						</div>
					</>
				)}
			</CardContent>
		</Card>
	)
}

export default SelectFields

interface FormProps {
	product: IProduct
	onToggle: () => void
}

function Forms({ product, onToggle }: FormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	const form = useForm<z.infer<typeof selectFieldsSchema>>({
		resolver: zodResolver(selectFieldsSchema),
		defaultValues: {
			category: product.category,
		},
	})

	const onSubmit = (values: z.infer<typeof selectFieldsSchema>) => {
		setIsLoading(true)
		const promise = updateProduct(product._id, values, pathname)
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
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Language<span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
										disabled={isLoading}
									>
										<SelectTrigger className='w-full bg-secondary'>
											<SelectValue placeholder={'Select'} />
										</SelectTrigger>
										<SelectContent>
											{categoryProducts.map(item => (
												<SelectItem key={item.name} value={item.name}>
													{item.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
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
