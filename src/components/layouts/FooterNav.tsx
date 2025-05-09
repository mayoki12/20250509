import React from 'react';
import Image from 'next/image';

const snsLinks = [
	{
		href: 'https://X.com/aiful_promotion',
		src: '/assets/images/top/logo_Black.png',
		alt: 'X_logo',
		width: 72,
		height: 72,
	},
	{
		href: 'https://www.youtube.com/channel/UCNKVTmAFzLing1ZutITonkA',
		src: '/assets2/images/top/icon_f_youtube.png',
		alt: 'YOUTUBE_logo',
		width: 88,
		height: 88,
	},
	{
		href: 'https://line.me/R/ti/p/%40580dopas',
		src: '/assets/images/top/icon_f_line.png',
		alt: 'LINE_logo',
		width: 88,
		height: 88,
	},
	{
		href: 'https://instagram.com/aiful_promotion?igshid=YmMyMTA2M2Y=',
		src: '/assets/images/top/icon_f_instagram.png',
		alt: 'instagram_logo',
		width: 88,
		height: 88,
	},
	{
		href: 'https://www.tiktok.com/@aiful.promotion',
		src: '/assets/images/top/icon_f_tiktok.png',
		alt: 'tiktok_logo',
		width: 88,
		height: 88,
	},
];

const groupCompanies = [
	{ name: 'アイフル株式会社', href: '@@@include:TOPURL.body@@@' },
	{ name: 'ライフカード株式会社', href: 'https://www.lifecard.co.jp' },
	{ name: 'AGペイメントサービス株式会社', href: 'https://ag-ps.co.jp' },
	{ name: 'AGビジネスサポート株式会社', href: 'https://www.aiful-bf.co.jp' },
	{ name: 'AGメディカル株式会社', href: 'https://www.agmedical.co.jp' },
	{ name: 'AGクラウドファンディング株式会社', href: 'https://www.ag-crowdfunding.com' },
	{ name: 'AGレンディング株式会社', href: 'https://ag-lending.jp' },
	{ name: 'AGキャピタル株式会社', href: 'https://nf-partners.co.jp' },
	{ name: 'AG債権回収株式会社', href: 'https://www.a-g-sv.com' },
	{ name: 'AGパートナーズ株式会社', href: 'https://www.aiful-p.com' },
	{ name: 'AG住まいるリースバック株式会社', href: 'https://agsmileleaseback.co.jp' },
	{ name: 'あんしん保証株式会社', href: 'https://anshin-gs.co.jp' },
	{ name: '株式会社FPC', href: 'https://www.fpc-pet.co.jp' },
	{ name: 'セブンシーズ株式会社', href: 'https://www.seven.co.jp' },
	{ name: '株式会社Liblock', href: 'https://www.liblock.co.jp' },
	{ name: '株式会社セイロップ', href: 'https://salop.co.jp' },
	{ name: 'ビットキャッシュ株式会社', href: 'https://bitcash.co.jp/docs/index' },
	{ name: 'AIRA & AIFUL Public Company Limited', href: 'https://www.aira-aiful.co.th' },
	{ name: 'PT REKSA FINANCE', href: 'https://www.reksafinance.co.id' },
];

export default function FooterNav() {
	return (
		<footer>
			{/* PC & SP共通のフッター */}
			<section className="pc">
				<a className="pagetop" href="#renew" />
				<LogoSection />
				<LinkButtons />
				<SnsSection />
			</section>

			<section className="sp">
				<a className="pagetop" href="#renew" />
				<LogoSection />
				<LinkButtons />
				<p className="sns_text">オフィシャルSNS</p>
				<SnsSection />
			</section>

			<AboutSection />
			<GroupSection />
			<BottomLinks />
		</footer>
	);
}

function LogoSection() {
	return (
		<a className="logo" href="/statement/">
			<Image
				src="/assets2/images/footer/logo.svg"
				alt="アイフル"
				width={178}
				height={78}
			/>
		</a>
	);
}

function LinkButtons() {
	return (
		<div className="link_btn">
			<a href="/statement/">アイフルについて</a>
			<a href="/inquiry/">お問合せ</a>
		</div>
	);
}

function SnsSection() {
	return (
		<div className="sns">
			<p className="sns_text">
				オフィシャル<br />
				SNS
			</p>
			{snsLinks.map((sns, index) => (
				<a key={index} href={sns.href} target="_blank" rel="noopener noreferrer">
					<Image src={sns.src} alt={sns.alt} width={sns.width} height={sns.height} />
				</a>
			))}
		</div>
	);
}

function AboutSection() {
	return (
		<section className="about">
			<p>
				<span>アイフルについて</span>
				アイフルは、カードローン、キャッシングローン、かりかえMAX、おまとめMAX、事業サポートプラン、SuLaLi、ファーストプレミアム・カードローンなどさまざまな融資に関するサービスをご用意している消費者金融会社です。パソコン、スマホ、ATM、コンビニなどで、融資・返済が可能です。貸付条件を確認し、借りすぎに注意しましょう。
			</p>
			<p>
				<span>貸金業登録内容等</span>
				商号：アイフル株式会社　URL：@@@include:PS_URL_AIFULJP-001.body@@@@@@include:PS_URL_AIFULJP-002.body@@@
				<br />
				本社：〒600-8420&nbsp;京都市下京区烏丸通五条上る高砂町381-1&nbsp;
				<br />
				代表者：代表取締役社長&nbsp;@@@include:PRESIDENT-001.body@@@@@@include:PRESIDENT-002.body@@@
				<br />
				登録番号：近畿財務局長@@@include:5349.body@@@第00218号&nbsp;日本貸金業協会会員 第002228号&nbsp;
				<br />
				@@@include:expiration_date.body@@@
				<br />
				加盟指定信用情報機関：株式会社日本信用情報機構 株式会社シー・アイ・シー
			</p>
		</section>
	);
}

function GroupSection() {
	return (
		<section className="about_AG">
			<div className="footer_list">
				<p className="footer_list_title">企業関連サイト</p>
				<a href="/group/" target="_blank" rel="noopener noreferrer">グループサイト</a>
				<a href="/group/ir/" target="_blank" rel="noopener noreferrer">IR情報</a>
				<a href="/group/recruit/" target="_blank" rel="noopener noreferrer">採用情報</a>
			</div>
			<div className="AG_list">
				<p className="AG_list_title">グループ会社</p>
				<ul className="AG_list_contents">
					{groupCompanies.map((company, index) => (
						<li key={index}>
							<a href={company.href} target="_blank" rel="noopener noreferrer">
								{company.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

function BottomLinks() {
	return (
		<section className="bottom">
			<div className="inner">
				<div className="link_text">
					<a href="/efforts/">各種取り組み・ご案内</a>
					<a href="/efforts/privacy/">個人情報保護方針</a>
					<a href="/efforts/privacymesure/">プライバシーステートメント</a>
					<a href="/sitemap/">サイトマップ</a>
					<a href="/efforts/termslist/">規約等一覧</a>
					<a href="/terms/">サイトご利用にあたって</a>
					<a href="/efforts/forces/">反社会的勢力に対する基本方針</a>
					<a href="/efforts/abr/">指定紛争解決機関に関するお知らせ</a>
				</div>
				<p className="copyright">@@@include:aiful_copyright.body@@@</p>
			</div>
		</section>
	);
}
