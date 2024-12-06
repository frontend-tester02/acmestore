import { ChildProps } from '@/types'
import SidebarLeft from './_components/sidebar-left'
import SidebarRight from './_components/sidebar-right'

function Layout({ children }: ChildProps) {
	return (
		<>
			<SidebarLeft />
			<main className='w-full  p-4 px-[200px] pt-[8vh] max-md:pl-20'>
				<div className='size-full rounded-md px-4 pb-4'>{children}</div>
			</main>
			<SidebarRight />
		</>
	)
}

export default Layout
