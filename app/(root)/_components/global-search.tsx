'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import { Search } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'
import { debounce } from 'lodash'

function GlobalSearch() {
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()

	console.log(`${window.location.pathname.split('/').join('/')}/products`)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase()
		const isProductPage = pathname.split('/').includes('products')

		if (text && text.length > 2) {
			const newUrl = formUrlQuery({
				params: searchParams.toString(),
				key: 'q',
				value: text,
				toProducts: !isProductPage,
			})
			router.push(newUrl)
		} else {
			const newUrl = removeKeysFromQuery({
				params: searchParams.toString(),
				keyToRemmove: ['q'],
			})

			router.push(newUrl)
		}
	}

	const debounceSearch = debounce(handleSearch, 300)
	return (
		<>
			<div className='relative mx-auto w-[350px] max-w-2xl max-md:w-[300px] md:w-[300px]'>
				<Input
					type='search'
					placeholder='Search for products...'
					className='h-10 w-full rounded-lg pl-4 pr-12 text-lg focus-visible:ring-gray-500'
					onChange={debounceSearch}
				/>
				<Button
					size='icon'
					variant='ghost'
					className='absolute right-1 top-1/2 -translate-y-1/2'
				>
					<Search className='size-5' />
				</Button>
			</div>
		</>
	)
}

export default GlobalSearch
