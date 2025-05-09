import React from 'react';
import { Breadcrumb } from '@/components/layouts/Header/Breadcrumb'
import { Accordion } from '@/components/ui/Accordion';

export default function StatementPage() {
	return (
		<>
			<Breadcrumb />
			<div className="content">
				<main className="no_side">
					<h1 className="lead">アイフルってどんな会社？</h1>
					<Accordion title="よくある質問">
						<p>ここに開閉されるコンテンツを書く</p>
					</Accordion>
				</main>
			</div>
		</>
	)
}