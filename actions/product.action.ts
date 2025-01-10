/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import Product from '@/database/product.model'
import { connectToDatabase } from '@/lib/mongoose'
import { GetAllProductParams, GetProductParams, ICreateProduct } from './types'
import { IProduct } from '@/app.types'
import { revalidatePath } from 'next/cache'
import User from '@/database/user.model'
import { cache } from 'react'
import { FilterQuery } from 'mongoose'

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

export const getProducts = async (params: GetProductParams) => {
	try {
		await connectToDatabase()
		const { clerkId, page = 1, pageSize = 6 } = params
		const skipAmount = (page - 1) * pageSize
		const user = await User.findOne({ clerkId })
		const products = await Product.find({ seller: user })
			.skip(skipAmount)
			.limit(pageSize)

		const totalProducts = await Product.find({
			seller: user._id,
		}).countDocuments()

		const isNext = totalProducts > skipAmount + products.length
		return { products, isNext, totalProducts }
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

export const getAllProducts = async (params: GetAllProductParams) => {
	try {
		await connectToDatabase()
		const { searchQuery, filter, maxPrice, minPrice } = params

		const query: FilterQuery<IProduct> = {}

		if (searchQuery) {
			query.$or = [
				{
					title: { $regex: new RegExp(searchQuery, 'i') },
				},
			]
		}

		if (minPrice !== undefined || maxPrice !== undefined) {
			query.price = {}
			if (minPrice !== undefined) {
				query.price.$gte = minPrice
			}
			if (maxPrice !== undefined) {
				query.price.$lte = maxPrice
			}
		}

		let sortOptions = {}

		switch (filter) {
			case 'trending':
				sortOptions = { createdAt: -1 }
				break
			case 'lowest-price':
				sortOptions = { price: 1 }
				break
			case 'highest-price':
				sortOptions = { price: -1 }
				break
			case 'bags':
				query.category = 'bags'
				break
			case 'drinkware':
				query.category = 'drinkware'
				break
			case 'electronics':
				query.category = 'electronics'
				break
			case 'footware':
				query.category = 'footware'
				break
			case 'headware':
				query.category = 'headware'
				break
			case 'hoodies':
				query.category = 'hoodies'
				break
			case 'jackets':
				query.category = 'jackets'
				break
			case 'kids':
				query.category = 'kids'
				break
			case 'pets':
				query.category = 'pets'
				break
			case 'shirts':
				query.category = 'shirts'
				break
			case 'stikers':
				query.category = 'stikers'
				break
			default:
				break
		}

		const products = await Product.find(query)
			.select('previewImage  title slug _id price seller')
			.sort(sortOptions)

		const totalProducts = await Product.countDocuments(query)

		return { products, totalProducts }
	} catch (error) {
		throw new Error('Something went wrong while getting all products')
	}
}
