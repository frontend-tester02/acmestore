'use server'

import Product from '@/database/product.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateProduct } from './types'

export const createProduct = async (product: ICreateProduct) => {
	try {
		await connectToDatabase()
		await Product.create(product)

		return true
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		throw new Error('Something went wrong while creating a product')
	}
}
