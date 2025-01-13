import EmptyShoppingCart from '@/components/shared/empty-shopping.cart'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'

function ShoopingCart() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size={'icon'} variant={'ghost'} aria-label='shopping-cart'>
					<ShoppingCart />
				</Button>
			</SheetTrigger>
			<SheetContent side={'right'}>
				<SheetHeader>
					<div className='flex items-center justify-between gap-2'>
						<h1 className='font-roboto text-2xl font-bold'>My Cart</h1>
					</div>
				</SheetHeader>
				<div className='mt-4 flex flex-col items-center space-y-3'>
					<EmptyShoppingCart />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default ShoopingCart
