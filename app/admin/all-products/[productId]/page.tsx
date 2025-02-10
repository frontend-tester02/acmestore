import { getProductById } from '@/actions/product.action'
import Header from '@/components/shared/header'
import React from 'react'
import Actions from './_components/actions'
import { Separator } from '@/components/ui/separator'
import { Images, Settings } from 'lucide-react'
import ProductFields from './_components/product-fields'
import Description from './_components/description'
import Price from './_components/price'
import SelectFields from './_components/select-fields'
import Information from './_components/information'
import PreviewImage from './_components/preview-image'

interface Props {
	params: { productId: string }
}

async function Page({ params }: Props) {
	const { productId } = await params
	const productJSON = await getProductById(productId)
	const product = JSON.parse(JSON.stringify(productJSON))

	return (
		<>
			<div className='flex items-center justify-between'>
				<Header
					title={product.title}
					description='Manage your product and see how it is performing.'
				/>

				<Actions {...product} />
			</div>

			<Separator className='my-3 bg-muted-foreground' />

			<div className='mt-6 grid grid-cols-2 gap-4'>
				<div className='flex flex-col space-y-2'>
					<div className='flex items-center gap-2'>
						<span className='font-roboto text-3xl font-medium'>
							Product Fields
						</span>
						<Settings />
					</div>
					<ProductFields {...product} />
					<Description {...product} />
					<SelectFields {...product} />
					<Price {...product} />
					<Information {...product} />
				</div>

				<div>
					{/* Preview Image */}
					<div className='flex items-center gap-2'>
						<span className='font-roboto text-3xl font-medium'>
							Preview Images
						</span>
						<Images />
					</div>
					<PreviewImage {...product} />
				</div>
			</div>
		</>
	)
}

export default Page
