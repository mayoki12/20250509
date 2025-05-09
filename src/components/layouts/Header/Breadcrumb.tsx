'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export function Breadcrumb() {
	const pathname = usePathname()
	const pathParts = pathname.split('/').filter(Boolean)

	const breadcrumbMap: Record<string, string> = {
		statement: '愛がいちばん。アイフル',
		about: 'アイフルってどんな会社？',
		usecase: 'こんなお客様にご利用いただいています',
		borrow: '借りるとき',
		products: '商品案内'
	}

	const breadcrumbs = pathParts.map((part, index) => {
		const href = '/' + pathParts.slice(0, index + 1).join('/')
		const label = breadcrumbMap[part] || decodeURIComponent(part)
		return { href, label }
	})

	const jsonLd = useMemo(() => {
		const items = [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'ホーム',
				item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/`
			},
			...breadcrumbs.map((b, i) => ({
				'@type': 'ListItem',
				position: i + 2,
				name: b.label,
				item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}${b.href}`
			}))
		]
		return {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: items
		}
	}, [breadcrumbs])

	return (
		<>
			<nav aria-label="breadcrumb" className="text-sm text-gray-600">
				<ol className="flex gap-2">
					<li>
						<Link href="/" className="text-blue-600 hover:underline">ホーム</Link>
					</li>
					{breadcrumbs.map((b, index) => {
						const isLast = index === breadcrumbs.length - 1
						return (
							<li key={b.href} className="flex items-center">
								<span className="mx-2">/</span>
								{isLast ? (
									<span>{b.label}</span>
								) : (
									<Link href={b.href} className="text-blue-600 hover:underline">{b.label}</Link>
								)}
							</li>
						)
					})}
				</ol>
			</nav>

			{/* 構造化データの出力 */}
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
		</>
	)
}
