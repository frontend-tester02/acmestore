import { model, models, Schema } from 'mongoose'

const ProductSchema = new Schema(
	{
		title: String,
		description: String,
		slug: String,
		color: String,
		category: String,
		size: String,
		price: Number,
		previewImage: String,
		published: { type: Boolean, default: false },
		seller: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
)

const Product = models.Product || model('Product', ProductSchema)

export default Product
