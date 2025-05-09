import React from 'react';
import { Breadcrumb } from '@/components/layouts/Header/Breadcrumb'
import Accordion from "@/components/ui/Accordion";

export default function StatementPage() {
	return (
		<>
			<Breadcrumb />
			<main>
				<Accordion />
			</main>
		</>
	)
}
