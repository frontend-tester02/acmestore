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
			<div className='container mx-auto mt-20 px-4 py-8'>
				<h1 className='mb-6 text-3xl font-bold'>Frequently Asked Questions</h1>
				<Accordion type='single' collapsible className='w-full'>
					{faqs.map((faq, index) => (
						<AccordionItem value={`item-${index}`} key={index}>
							<AccordionTrigger className='font-roboto text-xl font-bold'>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className='font-inter text-xl'>
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
