/* eslint-disable @typescript-eslint/no-unused-vars */
'use server'

import { ShippingData } from '@/app.types'
import Shipping from '@/database/shipping.model'
import { connectToDatabase } from '@/lib/mongoose'

export const saveShippingInfo = async (formData: ShippingData) => {
	try {
		await connectToDatabase()
		const newShippingInfo = new Shipping(formData)
		await newShippingInfo.save()
		return { success: true, message: 'Shipping info saved successfully' }
	} catch (error) {
		throw new Error('Something went wrong when save user data!')
	}
}

export const getShippingInfo = async () => {
	try {
		await connectToDatabase()
		const data = Shipping.findOne().select(
			'address address city state zipCode email country'
		)

		return data
	} catch (error) {
		throw new Error('Something went wrong while getting information!')
	}
}
