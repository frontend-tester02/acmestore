import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image
				src={'/sticker.avif'}
				alt='Logo'
				width={50}
				height={50}
				className='rounded-2xl border object-cover'
			/>
			<h1 className='font-roboto text-sm font-bold'>ACME STORE</h1>
		</Link>
	)
}

export default Logo
