import {
	FileCode,
	GaugeCircle,
	MessageSquareMore,
	Settings2,
	ShoppingBag,
} from 'lucide-react'

export const navLinks = [
	{ route: '', name: 'Home' },
	{ route: 'products', name: 'Shop' },
	{ route: 'faq', name: 'FAQ' },
	{ route: 'contact', name: 'Contact' },
]

export const productItems = [
	{
		title: 'Acme Circles T-shirt',
		image: '/products/t-shirts/t-shirt-1.avif',
		price: '20.00',
	},
	{
		title: 'Acme Drawstring Bag',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Cup',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
	{
		title: 'Acme Drawstring Bag',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Cup',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
	{
		title: 'Acme Drawstring Bag',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Cup',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
	{
		title: 'Acme Drawstring Bag',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Cup',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
	{
		title: 'Acme Drawstring Bag',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Cup',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
	{
		title: 'Acme Drawstring Bag',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Cup',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
]

export const scrollItems = [
	{
		title: 'Acme Drawstring Bag',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
	{
		title: 'Acme Drawstring',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Cup',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
	{
		title: 'Acme T-Shirt',
		image: '/products/t-shirts/t-shirt-2.avif',
		price: '12.00',
	},
	{
		title: 'Acme Bottle',
		image: '/products/t-shirts/t-shirt-circles-blue.avif',
		price: '15.00',
	},
]

export const products = [
	{ route: '/products', name: 'All' },
	{ route: '/products/bags', name: 'Bags' },
	{ route: '/products/drinkware', name: 'Drinkware' },
	{ route: '/products/electronics', name: 'Electronics' },
	{ route: '/products/footware', name: 'Footware' },
	{ route: '/products/headwear', name: 'Headwear' },
	{ route: '/products/hoodies', name: 'Hoodies' },
	{ route: '/products/jackets', name: 'Jackets' },
	{ route: '/products/kids', name: 'Kids' },
	{ route: '/products/pets', name: 'Pets' },
	{ route: '/products/shirts', name: 'Shirts' },
	{ route: '/products/stikers', name: 'Stikers' },
]

export const categoryProducts = [
	{ label: 'All', name: 'all' },
	{ label: 'Bags', name: 'bags' },
	{ label: 'Drinkware', name: 'drinkware' },
	{ label: 'Electronics', name: 'electronics' },
	{ label: 'Footware', name: 'footware' },
	{ label: 'Headware', name: 'headware' },
	{ label: 'Hoodies', name: 'hoodies' },
	{ label: 'Jackets', name: 'jackets' },
	{ label: 'Kids', name: 'kids' },
	{ label: 'Pets', name: 'pets' },
	{ label: 'Shirts', name: 'shirts' },
	{ label: 'Stikers', name: 'stikers' },
]

export const sortProducts = [
	{ label: 'Trending', name: 'trending' },
	{ label: 'Latest arrivals', name: 'latest-arrivals' },
	{ label: 'Lowest price', name: 'lowest-price' },
	{ label: 'Highest price', name: 'highest-price' },
]

// export const sortProducts = [
// 	'trending',
// 	'latest-arrivals',
// 	'lowest-price',
// 	'highest-price',
// ]

export const faqs = [
	{
		question: 'How do I place an order?',
		answer:
			'To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information, then confirm your order.',
	},
	{
		question: 'What payment methods do you accept?',
		answer:
			'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.',
	},
	{
		question: 'How long will it take to receive my order?',
		answer:
			'Delivery times vary depending on your location and the shipping method chosen. Generally, orders are processed within 1-2 business days, and standard shipping takes 3-5 business days. Express shipping options are available at checkout.',
	},
	{
		question: 'What is your return policy?',
		answer:
			'We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please visit our Returns page for more detailed information and to initiate a return.',
	},
	{
		question: 'Do you ship internationally?',
		answer:
			'Yes, we ship to many countries worldwide. Shipping costs and delivery times may vary. You can see available shipping options for your location during the checkout process.',
	},
	{
		question: 'How can I track my order?',
		answer:
			"Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number on our website or the carrier's site to track your package.",
	},
	{
		question: 'Are my personal and payment details secure?',
		answer:
			'Yes, we take your security seriously. Our website uses SSL encryption to protect your personal and payment information. We never store your full credit card details on our servers.',
	},
	{
		question: 'What should I do if I receive a damaged or incorrect item?',
		answer:
			"We're sorry to hear that. Please contact our customer service team within 48 hours of receiving your order. We'll arrange for a return or replacement as quickly as possible.",
	},
	{
		question: 'Do you offer gift wrapping?',
		answer:
			'Yes, we offer gift wrapping services for a small additional fee. You can select this option during the checkout process.',
	},
	{
		question: 'How can I contact customer support?',
		answer:
			'Our customer support team is available via email at support@yourstore.com, by phone at 1-800-123-4567 from 9am to 5pm EST, Monday through Friday, or through the chat feature on our website.',
	},
]

export const sellerNavLinks = [
	{ label: 'Dashboard', route: '/admin', icon: GaugeCircle },
	{ label: 'My Products', route: '/admin/my-products', icon: ShoppingBag },
	{
		label: 'Create Product',
		route: '/admin/create-products',
		icon: FileCode,
	},
	{ label: 'Reviews', route: '/admin/reviews', icon: MessageSquareMore },
	{ label: 'Settings', route: '/admin/settings', icon: Settings2 },
]
