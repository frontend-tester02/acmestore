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
	toProducts?: boolean
}

export const formUrlQuery = ({
	key,
	params,
	value,
	toProducts = false,
}: UrlQueryParams) => {
	const currentUrl = qs.parse(params)

	currentUrl[key] = value

	return qs.stringifyUrl(
		{
			url: toProducts
				? `${window.location.pathname.split('/').join('/')}products`
				: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	)
}

interface RemoveUrlQueryParams {
	params: string
	keyToRemmove: string[]
}

export const removeKeysFromQuery = ({
	params,
	keyToRemmove,
}: RemoveUrlQueryParams) => {
	const currentUrl = qs.parse(params)

	keyToRemmove.forEach(key => {
		delete currentUrl[key]
	})

	return qs.stringifyUrl(
		{
			url: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	)
}
