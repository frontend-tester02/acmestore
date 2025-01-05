/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import Product from '@/database/product.model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateProduct } from './types'
import { IProduct } from '@/app.types'
import { revalidatePath } from 'next/cache'
import User from '@/database/user.model'
import { cache } from 'react'

export const createProduct = async (data: ICreateProduct, clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await Product.create({ ...data, seller: user._id })
		revalidatePath('/seller/my-products')
	} catch (error) {
		throw new Error('Something went wrong while creating course!')
	}
}

export const getProducts = async (clerkId: string) => {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		const products = await Product.find({ seller: user._id })

		return products as IProduct[]
	} catch (error) {
		console.error(error)
		throw new Error('Something went wrong while getting product!')
	}
}

export const getProductById = async (id: string) => {
	try {
		await connectToDatabase()
		const product = await Product.findById(id)
		return product as IProduct
	} catch (error) {
		throw new Error('Something went wrong while getting product!')
	}
}

export const updateProduct = async (
	id: string,
	updateData: Partial<IProduct>,
	path: string
) => {
	try {
		await connectToDatabase()
		await Product.findByIdAndUpdate(id, updateData)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while updating product status!')
	}
}

export const deleteProduct = async (id: string, path: string) => {
	try {
		await connectToDatabase()
		await Product.findByIdAndDelete(id)
		revalidatePath(path)
	} catch (error) {
		throw new Error('Something went wrong while deleting product!')
	}
}

export const getFeaturedProduct = cache(async () => {
	try {
		await connectToDatabase()
		const products = await Product.find().select('_id size color')
		return products
	} catch (error) {
		throw new Error('Somehthing went wrong while getting fetarued product')
	}
})

export const getDetailedProduct = cache(async (slug: string) => {
	try {
		await connectToDatabase()
		const product = await Product.findOne({ slug }).select(
			'title description seller color size price previewImage'
		)

		if (!product) {
			throw new Error('Not found')
		}
		return product
	} catch (error) {
		console.log(error)

		throw new Error('Something went wrong while getting detailed product')
	}
})
