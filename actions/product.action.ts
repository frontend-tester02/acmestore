'use server'

import Product from '@/database/product.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateProduct } from './types'
import { IProduct } from '@/app.types'

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

export const getProducts = async () => {
	try {
		await connectToDatabase()
		const products = await Product.find()

		return products as IProduct[]
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error) {
		throw new Error('Something went wrong while getting product!')
	}
}
