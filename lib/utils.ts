import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import qs from 'query-string'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

interface UrlQueryParams {
	params: string
	key: string
	value: string | null
	toCourses?: boolean
}

export const formUrlQuery = ({
	key,
	params,
	value,
	toCourses = false,
}: UrlQueryParams) => {
	const currentUrl = qs.parse(params)

	currentUrl[key] = value

	return qs.stringifyUrl(
		{
			url: toCourses
				? `/${window.location.pathname.split('/')[1]}/courses`
				: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	)
}
