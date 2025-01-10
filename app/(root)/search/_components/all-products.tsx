import { IProduct } from '@/app.types'
import ProductCard from '@/components/cards/product-card'
import NoResult from '@/components/shared/no-result'

interface Props {
	result: {
		products: IProduct[]
		totalProducts: number
	}
}

async function AllProducts({ result }: Props) {
	const { products, totalProducts } = result

	return (
		<>
			<div className='container mx-auto mt-8 max-w-6xl'>
				<h2 className='font-roboto text-xl font-bold'>
					Showing {''} <span>{totalProducts}</span> total products
				</h2>

				<div className='mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
					{products.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div>
				{products.length === 0 && (
					<NoResult
						title='There are no products to show'
						description='"Find the products that suit you! 🚀 We currently do not have any products that match your request. Will be added soon! 💡"'
					/>
				)}
			</div>
		</>
	)
}

export default AllProducts
