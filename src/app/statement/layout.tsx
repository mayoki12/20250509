// app/statement/layout.tsx
import React from 'react';
import HeaderNav2 from '@/components/layouts/HeaderNav2';
import FooterNav from '@/components/layouts/FooterNav';
import '@/styles/statement_app.scss';
import '@/styles/footerNav.scss';
import '@/styles/style_min.css';
// import Script from 'next/script'

export default function StatementLayout({ children }: { children: React.ReactNode }) {
	return (
		<div id="renew">
			<div id="statement_wrapper">
				<HeaderNav2 />
				<div className="container">
					{children}
				</div>
				<FooterNav />
				{/* <Script src="/scripts/statement.js" strategy="beforeInteractive" />
				<Script src="/scripts/base.js" strategy="beforeInteractive" />
				<Script src="/scripts/test.js" strategy="beforeInteractive" /> */}
			</div>
		</div>
	);
}
