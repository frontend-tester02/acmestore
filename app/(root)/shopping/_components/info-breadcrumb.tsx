'use client'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
	items: {
		label: string
		href?: string
	}[]
	textColor?: string
}

function InfoBreadcrumb({ items, textColor }: Props) {
	const pathname = usePathname()
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{items.map((item, idx) => (
					<>
						<BreadcrumbItem key={idx || item.label}>
							{idx < items.length - 1 ? (
								<>
									<BreadcrumbLink
										href={item.href}
										className={cn(
											textColor,
											pathname === `/shopping/${item.label}` &&
												'font-bold text-blue-500'
										)}
									>
										{item.label}
									</BreadcrumbLink>
									<BreadcrumbSeparator />
								</>
							) : (
								<BreadcrumbPage className={cn(textColor, 'text-secondary')}>
									{item.label}
								</BreadcrumbPage>
							)}
						</BreadcrumbItem>
					</>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default InfoBreadcrumb
