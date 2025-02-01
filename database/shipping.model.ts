import { model, models, Schema } from 'mongoose'

export const ShippingSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		phone: String,
		country: String,
		address: String,
		address2: String,
		city: String,
		state: String,
		zipCode: String,
	},
	{ timestamps: true }
)
const Shipping = models.Shipping || model('Shipping', ShippingSchema)

export default Shipping
