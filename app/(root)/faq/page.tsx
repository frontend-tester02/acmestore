import Header from '@/components/shared/header'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/constants'

function Page() {
	return (
		<>
			<div className='container mt-20 mx-auto px-4 py-8'>
				<h1 className='text-3xl font-bold mb-6'>Frequently Asked Questions</h1>
				<Accordion type='single' collapsible className='w-full'>
					{faqs.map((faq, index) => (
						<AccordionItem value={`item-${index}`} key={index}>
							<AccordionTrigger className='font-roboto font-bold text-md'>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className='font-inter text-md'>
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</>
	)
}

export default Page
