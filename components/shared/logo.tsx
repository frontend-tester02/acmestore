import Link from 'next/link'
import React from 'react'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<h1 className='font-roboto text-sm font-bold'>ACME STORE</h1>
		</Link>
	)
}

export default Logo
