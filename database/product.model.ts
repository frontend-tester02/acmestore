import { model, models, Schema } from 'mongoose'

const ProductSchema = new Schema(
	{
		title: String,
		category: String,
		price: Number,
		previewImage: String,
		published: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

const Product = models.Product || model('Product', ProductSchema)

export default Product
