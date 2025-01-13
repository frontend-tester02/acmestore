'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Play, Pause } from 'lucide-react'

interface Props {
	children: React.ReactNode
	speed?: number
	direction?: 'vertical' | 'horizontal'
}

export function AutoplayScrollbar({
	children,
	speed = 30,
	direction = 'vertical',
}: Props) {
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const [isScrolling, setIsScrolling] = useState(true)
	const [reachedEnd, setReachedEnd] = useState(false)

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (!scrollContainer) return

		let animationFrameId: number
		let lastTimestamp: number

		const scroll = (timestamp: number) => {
			if (!isScrolling) return
			if (!lastTimestamp) lastTimestamp = timestamp
			const deltaTime = timestamp - lastTimestamp
			const scrollAmount = (speed * deltaTime) / 1000

			if (direction === 'vertical') {
				scrollContainer.scrollTop += scrollAmount
				if (
					scrollContainer.scrollHeight - scrollContainer.scrollTop <=
					scrollContainer.clientHeight
				) {
					setReachedEnd(true)
					return
				}
			} else {
				scrollContainer.scrollLeft += scrollAmount
				if (
					scrollContainer.scrollWidth - scrollContainer.scrollLeft <=
					scrollContainer.clientWidth
				) {
					setReachedEnd(true)
					return
				}
			}

			lastTimestamp = timestamp
			animationFrameId = requestAnimationFrame(scroll)
		}

		animationFrameId = requestAnimationFrame(scroll)

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId)
			}
		}
	}, [isScrolling, speed, direction])

	const toggleScrolling = () => {
		if (reachedEnd) {
			if (scrollContainerRef.current) {
				if (direction === 'vertical') {
					scrollContainerRef.current.scrollTop = 0
				} else {
					scrollContainerRef.current.scrollLeft = 0
				}
			}
			setReachedEnd(false)
		}
		setIsScrolling(!isScrolling)
	}

	return (
		<div className='relative'>
			<div
				ref={scrollContainerRef}
				className={`overflow-auto ${
					direction === 'vertical' ? 'h-64' : 'w-full'
				}`}
				style={{
					scrollbarWidth: 'thin',
					scrollbarColor: 'rgba(155, 155, 155, 0.5) transparent',
				}}
			>
				{children}
			</div>
			<Button
				onClick={toggleScrolling}
				className='absolute bottom-2 right-2 z-10'
				aria-label={isScrolling ? 'Pause scrolling' : 'Resume scrolling'}
			>
				{isScrolling ? (
					<Pause className='size-4' />
				) : (
					<Play className='size-4' />
				)}
			</Button>
		</div>
	)
}
