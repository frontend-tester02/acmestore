'use client'

import { SignOutButton, useUser } from '@clerk/nextjs'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarImage } from '../ui/avatar'
import Link from 'next/link'

function UserBox() {
	const user = useUser()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='size-10 cursor-pointer'>
					<AvatarImage
						src={user.user?.imageUrl}
						className='object-cover'
						alt={'Image'}
					/>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-80'
				align='start'
				alignOffset={11}
				forceMount
			>
				<div className='flex flex-col space-y-4 p-2'>
					<p className='text-xs font-medium leading-none text-muted-foreground'>
						{user.user?.emailAddresses[0].emailAddress}
					</p>

					<div className='flex items-center gap-x-2'>
						<div className='rounded-md bg-secondary'>
							<Avatar className='size-10'>
								<AvatarImage src={user.user?.imageUrl} />
							</Avatar>
						</div>

						<div className='space-y-1'>
							<p className='line-clamp-1 font-roboto text-sm'>
								{user.user?.fullName}
							</p>
						</div>
					</div>
				</div>

				<DropdownMenuSeparator />
				{/* {user?.isAdmin && (
					<Link href={'/admin'}>
						<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
							{'admin'}
						</DropdownMenuItem>
					</Link>
				)}

				{user?.role === 'instructor' && (
					<Link href={'/instructor'}>
						<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
							{'instructor'}
						</DropdownMenuItem>
					</Link>
				)} */}

				<Link href={'/profile'}>
					<DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
						Manage Account
					</DropdownMenuItem>
				</Link>
				<DropdownMenuItem
					asChild
					className='w-full cursor-pointer text-muted-foreground'
				>
					<SignOutButton>Log out</SignOutButton>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserBox
