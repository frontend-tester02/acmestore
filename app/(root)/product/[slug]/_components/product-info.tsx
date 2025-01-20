/* eslint-disable react/no-children-prop */
'use client'
import { IProduct } from '@/app.types'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useState } from 'react'

function ProductInfo(product: IProduct) {
	const [sellectedColor, setSellectedColor] = useState<string>('')
	const [sellectedSize, setSellectedSize] = useState<string>('')

	const searchParams = useSearchParams()
	const router = useRouter()

	useCallback(() => {
		setSellectedColor(searchParams.get('color') || '')
		setSellectedSize(searchParams.get('size') || '')
	}, [searchParams])

	const hasColorOptions = product.color && product.color.length > 0
	const hasSizeOptions = product.size && product.size.length > 0

	const isSelectionComplete =
		(!hasColorOptions || sellectedColor) && (!hasSizeOptions || sellectedSize)

	const updateURL = (color: string, size: string) => {
		const params = new URLSearchParams(searchParams)
		if (color) params.set('color', color)
		if (size) params.set('size', size)
		router.push(`?${params.toString()}`, { scroll: false })
	}

	const handleColorSelect = (color: string) => {
		setSellectedColor(color)
		updateURL(color, sellectedSize)
	}

	const handleSizeSelect = (size: string) => {
		setSellectedSize(size)
		updateURL(sellectedColor, size)
	}

	return (
		<div className='container mt-12 flex flex-col gap-4'>
			<div className='flex flex-col gap-2'>
				<h1 className='mt-2 space-y-2 font-roboto text-5xl font-bold'>
					{product.title}
				</h1>
				<p className='w-40 rounded-full bg-blue-600 p-2 text-center font-inter text-white'>
					{product.price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
					<span className='ml-1'>USD</span>
				</p>

				<Separator className='my-3' />

				{hasColorOptions && (
					<div className='mb-4 flex flex-col'>
						<h1 className='mb-4 font-roboto text-2xl uppercase'>Color</h1>
						<div className='mb-2 flex items-center gap-2'>
							{product.color.split(', ').map(item => (
								<Button
									key={item}
									onClick={() => handleColorSelect(item)}
									className={`h-6 w-20 rounded-full border bg-white text-black hover:text-white dark:bg-black dark:text-white ${
										sellectedColor === item
											? 'border-blue-700 bg-black text-white transition-colors'
											: 'border-gray-600'
									}`}
								>
									{item}
								</Button>
							))}
						</div>
					</div>
				)}

				{hasSizeOptions && (
					<div className='mb-4 flex flex-col'>
						<h1 className='mb-4 font-roboto text-2xl uppercase '>Size</h1>
						<div className='mb-2 flex items-center gap-2'>
							{product.size.split(', ').map(item => (
								<Button
									key={item}
									onClick={() => handleSizeSelect(item)}
									className={`h-6 w-20 rounded-full border bg-white text-black hover:text-white dark:bg-black dark:text-white ${
										sellectedSize === item
											? 'border-blue-700 bg-black text-white transition-colors'
											: 'border-gray-600'
									}`}
								>
									{item}
								</Button>
							))}
						</div>
					</div>
				)}

				<p className='mb-4 font-inter text-sm'>{product.description}</p>

				<Button
					type='button'
					className='flex w-full self-end rounded-full bg-blue-600 p-4 text-xl transition-opacity duration-200 hover:bg-blue-500'
					style={{ opacity: isSelectionComplete ? 1 : 0.5 }}
					disabled={!isSelectionComplete}
				>
					Add To Cart
				</Button>
			</div>

			<div className='mt-8'></div>
		</div>
	)
}

export default ProductInfo
