'use client'

import ReactStars from 'react-stars'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { formatDistanceToNow } from 'date-fns'

function ReviewCard() {
	return (
		<div className='mt-6 border-t border-t-blue-500'>
			<div className='mt-8 flex gap-2'>
				<Avatar>
					<AvatarImage src={'/products/t-shirts/t-shirt-1.avif'} />
					<AvatarFallback className='uppercase'>
						Nuriddinov Shokhrukh
					</AvatarFallback>
				</Avatar>

				<div className='flex flex-col'>
					<div>Nuriddinov Shokhrukh</div>
					<div className='flex items-center gap-1'>
						<ReactStars value={4.0} edit={false} color2='#DD6B20' />
						<p className='text-sm opacity-50'>
							{formatDistanceToNow(new Date())}
						</p>
					</div>
				</div>
			</div>

			<div className='mt-2'>Lorem ipsum dolor sit amet.</div>
		</div>
	)
}

export default ReviewCard
