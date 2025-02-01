/* eslint-disable no-use-before-define */
export interface INavLinks {
	name: string
	route: string
}

export interface IProduct {
	_id: string
	title: string
	description: string
	category: string
	color: string
	size: string
	price: number
	previewImage: string
	published: boolean
	slug: string
}

export interface IUser {
	_id: string
	clerkId: string
	fullName: string
	email: string
	picture: string
	role: string
	bio: string
	phone: string
	job: string
}

export interface SearchParamsProps {
	searchParams: { [key: string]: string | undefined }
}

export interface ShippingData {
	firstName: string
	lastName: string
	email: string
	phone: string
	country: string
	address: string
	address2: string
	city: string
	state: string
	zipCode: string
}

export interface IReview {
	data: string
	rating: number
	user: IUser
	createdAt: string
	_id: string
	product: IProduct
}
