'use client'
import { deleteProduct, updateProduct } from '@/actions/product.action'
import { IProduct } from '@/app.types'
import ConfirmDeleteModal from '@/components/modals/confirm-delete.modal'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'sonner'

function Actions(product: IProduct) {
	const pathname = usePathname()
	const router = useRouter()

	const onUpdateStatus = () => {
		let promise
		if (product.published) {
			promise = updateProduct(product._id, { published: false }, pathname)
		} else {
			promise = updateProduct(product._id, { published: true }, pathname)
		}

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated',
			error: 'Something went wrong!',
		})
	}

	const onDelete = () => {
		const promise = deleteProduct(product._id, '/seller/my-products').then(() =>
			router.push('/seller/my-products')
		)

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully deleted!',
			error: 'Something went wrong!',
		})
	}

	return (
		<div className='flex gap-2 self-end'>
			<Button onClick={onUpdateStatus}>
				{product.published ? 'Draft' : 'Publish'}
			</Button>
			<ConfirmDeleteModal onConfirm={onDelete}>
				<Button variant={'destructive'}>Delete</Button>
			</ConfirmDeleteModal>
		</div>
	)
}

export default Actions
