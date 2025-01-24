import ProductImage from './_components/product-image'
import { getDetailedProduct } from '@/actions/product.action'
import ProductInfo from './_components/product-info'

type PageProps = {
	params: {
		slug: string
	}
}

async function Page({ params }: PageProps) {
	const { slug } = params
	const productJSON = await getDetailedProduct(slug)

	const product = JSON.parse(JSON.stringify(productJSON))
	return (
		<>
			<div className='container mx-auto max-w-screen-2xl'>
				<div className='grid grid-cols-4 gap-4 p-12 max-md:p-8'>
					<div className='col-span-2 max-lg:col-span-4'>
						<ProductImage {...product} />
					</div>
					<div className='col-span-2 max-lg:col-span-4'>
						<ProductInfo {...product} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
