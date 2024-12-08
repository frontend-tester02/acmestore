export interface INavLinks {
	name: string
	route: string
}

export interface IProduct {
	_id: string
	name: string
	image: string
	price: number
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
	approvedSeller: boolean
	isAdmin: boolean
}

export interface IReview {
	data: string
	rating: number
	user: IUser
	createdAt: string
	_id: string
	course: IProduct
	isFlag: boolean
}
