import { getProducts } from '@/actions/product.action'
import { SearchParamsProps } from '@/app.types'
import SellerProductCard from '@/components/cards/seller-product.card'
import Header from '@/components/shared/header'
import Pagination from '@/components/shared/pagination'
import { auth } from '@clerk/nextjs/server'

async function Page({ searchParams }: SearchParamsProps) {
	const { userId } = await auth()
	const params = searchParams
	const page = params.page ? +params.page : 1
	const result = await getProducts({ clerkId: userId!, page })

	return (
		<>
			<Header title='My products' description='Here are your latest products' />
			<div className='mt-4 grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
				{result.products.map(item => (
					<SellerProductCard
						key={item._id}
						product={JSON.parse(JSON.stringify(item))}
					/>
				))}
			</div>

			<div className='mt-6'>
				<Pagination pageNumber={page} isNext={result.isNext} />
			</div>
		</>
	)
}

export default Page
