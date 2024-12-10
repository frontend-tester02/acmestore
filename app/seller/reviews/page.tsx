import ReviewCard from '@/components/cards/review.card'
import Header from '@/components/shared/header'
import { Separator } from '@/components/ui/separator'

function Page() {
	return (
		<>
			<Header
				title='Review'
				description='Here are you can see all the reviews of your products'
			/>

			<div className='mt-4 rounded-md bg-background p-4'>
				<h3 className='font-roboto text-lg font-medium'>All Reviews</h3>
				<Separator className='my-3' />

				<div className='flex flex-col space-y-3'>
					<ReviewCard />
				</div>

				{/* <div className='mt-6'>
					<Pagination isNext={isNext} pageNumber={page} />
				</div> */}
			</div>
		</>
	)
}

export default Page
