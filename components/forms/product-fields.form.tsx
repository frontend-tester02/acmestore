'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { ChangeEvent, useState } from 'react'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { storage } from '@/lib/firebase'
import { ImageDown } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { productSchema } from '@/lib/validation'
import { categoryProducts } from '@/constants'
import { Textarea } from '../ui/textarea'
import { useUser } from '@clerk/nextjs'
import { createProduct } from '@/actions/product.action'

function ProductsFieldsForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [previewImage, setPreviewImage] = useState('')
	const [open, setOpen] = useState(false)

	const { user } = useUser()
	const router = useRouter()

	const form = useForm<z.infer<typeof productSchema>>({
		resolver: zodResolver(productSchema),
		defaultValues: defaultVal,
	})

	function onUpload(e: ChangeEvent<HTMLInputElement>) {
		const files = e.target.files
		if (!files) {
			return null
		}

		const file = files[0]

		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = e => {
			const refs = ref(storage, `/acmestore/product/${uuidv4()}`)
			const result = e.target?.result as string
			const promise = uploadString(refs, result, 'data_url').then(() => {
				getDownloadURL(refs).then(url => setPreviewImage(url))
			})

			toast.promise(promise, {
				loading: 'Uploading...',
				success: 'Successfully uploaded!',
				error: 'Something went wrong!',
			})
		}
	}

	function onSubmit(values: z.infer<typeof productSchema>) {
		if (!previewImage) {
			return toast.error('Please upload a preview image')
		}
		setIsLoading(true)
		const { price } = values
		const promise = createProduct(
			{
				...values,
				price: +price,
				previewImage,
				size: '',
			},
			user?.id as string
		)
			.then(() => {
				form.reset()
				router.push('/seller/my-products')
			})
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully created!',
			error: 'Something went wrong',
		})
	}
	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Product name <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input
										{...field}
										className='bg-secondary'
										placeholder='Write product name...'
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Short description <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Textarea
										{...field}
										className='h-44 bg-secondary'
										placeholder='Description'
										disabled={isLoading}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<div className='grid gap-4 md:grid-cols-1 lg:grid-cols-3'>
						<FormField
							control={form.control}
							name='category'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Category<span className='text-red-500'>*</span>
									</FormLabel>
									<FormControl>
										<Select
											defaultValue={field.value}
											onValueChange={field.onChange}
											disabled={isLoading}
										>
											<SelectTrigger className='w-full bg-secondary'>
												<SelectValue placeholder={'Select product type...'} />
											</SelectTrigger>
											<SelectContent>
												{categoryProducts.map(item => (
													<SelectItem key={item} value={item}>
														{item}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='price'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Price<span className='text-red-500'>*</span>
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											className='bg-secondary'
											type='number'
											disabled={isLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormItem>
							<FormLabel>
								Preview image<span className='text-red-500'>*</span>
							</FormLabel>
							<Input
								className='bg-secondary'
								type='file'
								disabled={isLoading}
								onChange={onUpload}
							/>
						</FormItem>
					</div>

					<div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2'>
						<FormField
							control={form.control}
							name='color'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Color
										<span className='text-red-500'>*</span>
									</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											className=' bg-secondary'
											disabled={isLoading}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='size'
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Size
										<span className='text-red-500'>*</span>
									</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											className=' bg-secondary'
											disabled={isLoading}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>

					<div className='flex justify-end gap-4'>
						<Button
							type='button'
							variant={'destructive'}
							onClick={() => form.reset()}
							disabled={isLoading}
						>
							Clear
						</Button>
						<Button type='submit' disabled={isLoading}>
							Submit
						</Button>
						{previewImage && (
							<Button
								type='button'
								variant={'outline'}
								onClick={() => setOpen(true)}
							>
								<span>Image</span>
								<ImageDown className='ml-2 size-4' />
							</Button>
						)}
					</div>
				</form>
			</Form>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogTitle></DialogTitle>
					<div className='relative h-72'>
						<Image
							src={previewImage}
							alt='prveview image'
							fill
							className='object-cover'
						/>
					</div>
					<Button
						className='w-fit'
						variant={'destructive'}
						onClick={() => {
							setPreviewImage('')
							setOpen(false)
						}}
					>
						Remove
					</Button>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default ProductsFieldsForm

const defaultVal = {
	title: '',
	category: '',
	price: '',
}
