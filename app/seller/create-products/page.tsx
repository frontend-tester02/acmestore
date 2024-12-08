import ProductsFieldsForm from '@/components/forms/product-fields.form'
import Header from '@/components/shared/header'
import { Separator } from '@/components/ui/separator'
import React from 'react'

function Page() {
	return (
		<>
			<Header
				title='Create a product'
				description='Fill in the details below to create a new product'
			/>

			<div className='mt-4 rounded-md bg-background p-4'>
				<h3 className='font-roboto text-lg font-medium'>Basic information</h3>
				<Separator className='my-3' />
				<ProductsFieldsForm />
			</div>
		</>
	)
}

export default Page
