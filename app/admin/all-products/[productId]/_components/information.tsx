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
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import UseToggleEdit from '@/hooks/use-toggle-edit'
import { informationSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

function Information(product: IProduct) {
	const { state, onToggle } = UseToggleEdit()
	return (
		<Card>
			<CardContent className='relative p-2'>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-medium'>Information</span>
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
							<span className='self-start font-roboto font-bold text-muted-foreground'>
								Color:
							</span>
							<span className='line-clamp-3 font-medium'>{product.color}</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='self-start font-roboto font-bold text-muted-foreground'>
								Size:
							</span>
							<span className='line-clamp-3 font-medium'>{product.size}</span>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default Information
interface FormProps {
	product: IProduct
	onToggle: () => void
}

function Forms({ product, onToggle }: FormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const pathname = usePathname()

	const form = useForm<z.infer<typeof informationSchema>>({
		resolver: zodResolver(informationSchema),
		defaultValues: {
			color: product.color,
			size: product.size,
		},
	})

	const onSubmit = (values: z.infer<typeof informationSchema>) => {
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
						name='color'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea {...field} disabled={isLoading} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='size'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Textarea {...field} disabled={isLoading} />
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
