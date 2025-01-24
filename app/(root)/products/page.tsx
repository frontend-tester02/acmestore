import React from 'react'
import AllProducts from './_components/all-products'
import SidebarLeft from './_components/sidebar-left'
import SidebarRight from './_components/sidebar-right'
import SelectProducts from './_components/select-products'
import { SearchParamsProps } from '@/app.types'
import { getAllProducts } from '@/actions/product.action'

async function Page({ searchParams }: SearchParamsProps) {
	const params = searchParams

	const resultJSON = await getAllProducts({
		searchQuery: params.q,
		filter: params.filter,
	})
	const result = JSON.parse(JSON.stringify(resultJSON))
	return (
		<>
			<SidebarLeft />
			<main className='w-full p-4 px-[170px] pt-[8vh] max-md:px-0'>
				<div className='mt-8 size-full rounded-md px-4 pb-4'>
					<SelectProducts />
					<AllProducts result={result} />
				</div>
			</main>
			<SidebarRight />
		</>
	)
}

export default Page
