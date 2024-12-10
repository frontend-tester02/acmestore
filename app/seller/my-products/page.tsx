import { getProducts } from '@/actions/product.action'
import SellerProductCard from '@/components/cards/seller-product.card'
import Header from '@/components/shared/header'

async function Page() {
	const products = await getProducts()

	return (
		<>
			<Header title='My products' description='Here are your latest products' />
			<div className='mt-4 grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
				{products.map(item => (
					<SellerProductCard
						key={item._id}
						product={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>
		</>
	)
}

export default Page
