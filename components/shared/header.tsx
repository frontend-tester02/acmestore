import React from 'react'

interface Props {
	title: string
	description?: string
}

function Header({ title }: Props) {
	return (
		<>
			<div className='container mx-auto mt-8 max-w-6xl'>
				<h2 className='font-roboto text-xl font-bold'>{title}</h2>
			</div>
		</>
	)
}

export default Header
