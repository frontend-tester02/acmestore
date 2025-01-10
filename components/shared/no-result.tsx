import Image from 'next/image'

interface Props {
	title: string
	description: string
}

function NoResult({ title, description }: Props) {
	return (
		<div className='my-20 flex w-full flex-col items-center justify-center'>
			<Image
				src={'/products/noproducts.png'}
				alt='No found'
				width={270}
				height={200}
				className='block object-contain'
			/>
			<h2 className='mt-8 font-roboto text-2xl font-bold'>{title}</h2>
			<p className='my-3.5 max-w-md text-center'>{description}</p>
		</div>
	)
}

export default NoResult
