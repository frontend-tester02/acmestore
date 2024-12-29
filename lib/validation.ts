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
})

export const ProductFieldsSchema = z.object({
	title: z.string().min(3),
})
