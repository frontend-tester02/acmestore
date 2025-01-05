import { IProduct } from '@/app.types'
import Image from 'next/image'
import React from 'react'

async function ProductImage(product: IProduct) {
	return (
		<div className='container mt-12'>
			<Image
				src={product.previewImage}
				alt='product'
				width={700}
				height={300}
				className='rounded-lg bg-secondary object-contain'
			/>
		</div>
	)
}

export default ProductImage
