export interface ICreateProduct {
	title: string
	description: string
	category: string
	size: string
	price: number
	previewImage: string
}

export interface ICreateUser {
	clerkId: string
	fullName: string
	picture: string
	email: string
}

export interface IUpdateUser {
	clerkId: string
	updatedData: {
		fullName: string
		picture: string
		email: string
	}
}

export interface GetProductParams {
	clerkId: string
	page?: number
	pageSize?: number
}
