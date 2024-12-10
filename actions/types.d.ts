export interface ICreateProduct {
	title: string
	description: string
	category: string
	size: string
	price: number
	previewImage: string
}

export interface GetProductParams {
	clerkId: string
	page?: number
	pageSize?: number
}
