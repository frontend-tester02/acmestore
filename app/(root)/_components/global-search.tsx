'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

function GlobalSearch() {
	return (
		<>
			<div className='relative mx-auto w-[400px] max-w-2xl max-md:w-[300px] md:w-[300px]'>
				<Input
					type='search'
					placeholder='Search for products...'
					className='h-10 w-full rounded-lg pl-4 pr-12 text-lg focus-visible:ring-gray-500'
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
