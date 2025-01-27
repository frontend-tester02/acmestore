import { z } from 'zod'

export const contactSchema = z.object({
	message: z.string().min(10),
	email: z.string().email(),
	name: z.string().min(3),
})

export const productSchema = z.object({
	title: z.string(),
	description: z.string().min(10),
	category: z.string(),
	price: z.string().min(0),
	color: z.string(),
	size: z.string(),
})

export const ProductFieldsSchema = z.object({
	title: z.string().min(3),
	slug: z.string(),
})

export const descriptionSchema = z.object({
	description: z.string(),
})

export const selectFieldsSchema = z.object({
	category: z.string(),
})

export const informationSchema = z.object({
	color: z.string(),
	size: z.string(),
})

export const priceSchema = z.object({
	price: z.string(),
})

export const profileSchema = z.object({
	bio: z.string().min(10).optional(),
	phone: z.string().optional(),
	job: z.string().min(3).optional(),
})

export const shoppingCartSchema = z.object({
	email: z.string(),
	phoneNumber: z.string(),
	country: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	address: z.string(),
	address2: z.string(),
	city: z.string(),
	state: z.string(),
	zipCode: z.string(),
})
