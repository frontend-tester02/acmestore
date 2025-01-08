import { ChildProps } from '@/types'
import SidebarLeft from './_components/sidebar-left'
import SidebarRight from './_components/sidebar-right'
import SelectProducts from './_components/select-products'

function Layout({ children }: ChildProps) {
	return (
		<>
			<SidebarLeft />
			<main className='w-full p-4 px-[170px] pt-[8vh] max-md:px-0'>
				<div className='mt-8 size-full rounded-md px-4 pb-4'>
					<SelectProducts />
					{children}
				</div>
			</main>
			<SidebarRight />
		</>
	)
}

export default Layout
