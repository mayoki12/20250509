import React from 'react';
import Image from 'next/image'
import { Breadcrumb } from '@/components/layouts/Header/Breadcrumb'
import { TEXTS } from '@/lib/texts';
import { createMetadata, pageMeta } from '@/lib/meta';

export const metadata = createMetadata(pageMeta.statement);

const DynamicLinkUrl = process.env.NEXT_PUBLIC_DYNAMIC_LINK;

export default function StatementPage() {
	return (
		<>
			<Breadcrumb />
			<div className="content">
				<main className="no_side">
					<h1 className="lead">愛がいちばん。アイフル</h1>
					<p>「そこに、愛はあるんか…？」</p>
					<p>アイフルは、キャッシング､カードローン､事業サポートローンなど、お客様の急な出費をバックアップ。<br className="hidden md:inline" />ビジネスやプライベートなど、お客様のニーズに合わせた豊かなサービスを、<br className="hidden md:inline" />安心してご利用いただけるように努めています。</p>
					<section>
						<div className="title_link row">
							<a href="/statement/about/">
								<p className="ttl">アイフルって<br />どんな会社？</p>
								<p>アイフルが大切にする<br className="block md:hidden" />理念や指針</p>
							</a>
							<a href="/statement/usecase/">
								<p className="ttl">こんなお客様にご利用いただいています</p>
								<p>アイフルのお客様の<br className="block md:hidden" />傾向をデータで紹介</p>
							</a>
							<a href="/statement/voice/">
								<p className="ttl">お客様の声</p>
								<p>いただいた『お客様の声』<br className="block md:hidden" />に対する取組み</p>
							</a>
							<a href="/statement/cm/">
								<p className="ttl">CMコンテンツ</p>
								<p>『そこに愛はあるんか？』<br className="block md:hidden" />でおなじみのアイフルCMギャラリー</p>
							</a>
						</div>
					</section>
					<section className="first">
						<div className="row_pc">
							<div className="image">
								<Image
									src="/assets/images/statement/index_first01.webp"
									alt=""
									width={569}
									height={357}
								/>
							</div>
							<div className="text">
								<h2>「今、スグ」にこたえます</h2>
								<p className="subttl">最短{TEXTS.Examination_Time}分で融資が可能！</p>
								<p>アイフルは、最短{TEXTS.Examination_Time}分融資にも対応します。お申込みからお借入れまでをスムーズに、「今、スグ」お金が必要という方の力になります。</p>
								<p>※{TEXTS.Examination_Annotation}</p>
							</div>
						</div>
						<div className="row_pc">
							<div className="image">
								<Image
									src="/assets/images/statement/index_first02.png"
									alt=""
									width={569}
									height={357}
								/>
							</div>
							<div className="text">
								<h2>スマホローンなら、<br />来店なし！郵送物なし！</h2>
								<p className="subttl">お申込みからお借入れまで、すべてのお手続きはスマホから。</p>
								<p>お申込みからご返済まで･･･すべてのお手続きをスマホからご利用いただけます。カードレスなので、ご自宅への郵送物も一切ありません。</p>
							</div>
						</div>
						<div className="row_pc">
							<div className="image">
								<Image
									src="/assets/images/statement/index_first03.png"
									alt=""
									width={569}
									height={357}
								/>
							</div>
							<div className="text">
								<h2>コンビニでご利用できます</h2>
								<p className="subttl">提携ATM は全国70,000台。</p>
								<p>アイフル店舗だけでなく、提携ATM、コンビニなど、借りられる・返せる手段を用意しています。さまざまなお客様のライフスタイルにお応えできるよう努めます。</p>
							</div>
						</div>
						<div className="row_pc">
							<div className="image">
								<Image
									src="/assets/images/statement/index_first01.png"
									alt=""
									width={569}
									height={357}
								/>
							</div>
							<div className="text">
								<h2>常に適正な限度額へ変更しています</h2>
								<p>「増額したい」そのようなときは、スマホアプリから最新の収入証明書をご提出ください。<br />利用限度額が変わる場合、メールなどでお知らせします。（増額時・減額時含む）</p>
								<div style={{ marginTop: '22px' }}>
									<a
										className="btn_arr"
										href={`${DynamicLinkUrl}doc_submit`}
										// onClick={() => {
										// 	if (typeof window !== 'undefined' && typeof ga === 'function') {
										// 		ga('send', 'event', 'AppDL', 'DynamicLink', 'スマホアプリ');
										// 	}
										// }}
									>
										スマホアプリから提出
									</a>
								</div>
							</div>z
						</div>
						<div className="row_pc">
							<div className="image">
								<Image
									src="/assets/images/statement/index_first05.png"
									alt=""
									width={569}
									height={357}
								/>
							</div>
							<div className="text">
								<h2>いつでも呼んでください</h2>
								<p className="subttl">チャットで24時間ご相談。完済までサポート。</p>
								<p>「困ったな」「分からない」「こういう場合はどうしたら・・・」<br /><br />お客様の疑問やお困りごとは来店・お電話はもちろん、AIチャットボットやオペレーター対応のチャットボットがおうかがいします。</p>
								</div>
							</div>
					</section>
				</main>
			</div>
		</>
	)
}
