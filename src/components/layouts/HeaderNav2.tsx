// HeaderNav.tsx
'use client';

import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '@/components/layouts/Header/HeaderNav.module.scss';
import MenuSearch from '@/components/layouts/Header/MenuSearch';
// import Script from 'next/script';

const HeaderNav: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = (e: { preventDefault: () => void; }) => {
		e.preventDefault(); // 本来のリンク挙動を防止
		setIsOpen(!isOpen); // 状態をトグルして開閉を切り替える
		document.body.classList.toggle('nav-open'); // ボディにクラスを追加して全体に影響
	};

	return (
		<>
			<header>
				<div className="inner">
					<div className="inner_logo">
						<p className="AIFULCLS20240705002">
							<span>消費者金融のアイフル</span>
						</p>
						<p className="AIFULCLS20240705001">
							<a href="@@@include:TOPURL.body@@@">
								<img src="/assets2/images/header/logo.svg" alt="消費者金融のアイフル" />
							</a>
						</p>
					</div>
					<ul className="links pc">
						<li><a href="/borrow/">借りるとき</a></li>
						<li><a href="/repay/">返すとき</a></li>
					</ul>
				</div>
			</header>

			<nav className="nav">
				<div className="nav_btn static">
					<a href="/member/" className="nav_member">
						<span>会員ログイン</span>
					</a>
					<a
						className="nav_trigger"
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(!isOpen);
							document.body.classList.toggle('nav-open');
						}}
						id="nav_open"
					>
						<span className="nav3line"></span>
						<span className="nav3line"></span>
						<span className="nav3line"></span>
						<span>メニュー</span>
					</a>
				</div>

				<div className={`menu ${isOpen ? 'open' : ''}`}>
					<div className="menu_inner">
						<div className="menu_center">
							{/* ここで MenuSearch コンポーネントを呼び出す */}
							<MenuSearch />

							<div className="menu_row">
								{/* <!---PC1列目---> */}
								<div className="menu_column">
									<dl className="pc">
										<dt ><a href="/starter/">はじめてお金を借りる<br className="pc" />ならアイフル</a><a className="open_trigger sp" href="javascript:void(0)"></a>
										</dt>
										<dd ><a href="/starter/cardloan/">カードローンのご案内</a>
											<a href="/starter/flow/">お申込みから<br className="pc" />ご完済までの流れ</a><a href="/starter/hurry/">即日融資でのお借入れ</a><a href="/starter/secret/">WEB完結で知られずに借りたい</a><a href="/starter/1sec/">1秒診断</a><a href="/starter/zero/">最大30日間利息0円サービス</a><a href="/starter/fit/">あなたにピッタリの借り方は？</a>
										</dd>
									</dl>
									<dl className="pc">
										<dt ><a href="/support/">お客様サポート</a></dt>
										<dd ><a href="https://faq.aiful.co.jp/">よくある質問</a><a href="/inquiry/">お問合せ</a><a href="/support/poppo/">チャットサービス案内</a><a href="/cardloan/">カードローン・キャッシングの<br />基礎知識</a><a href="/support/referral/">お友だち紹介</a>
										</dd>
									</dl>
								</div>
								{/* <!---PC2列目---> */}
								<div className="menu_column typesquare_option">
									<dl className="pc typesquare_option">
										<dt className=" typesquare_option"><a href="/borrow/" className=" typesquare_option">借りるとき</a><a className="open_trigger sp" href="javascript:void(0)"></a></dt>
										<dd className=" typesquare_option"><a href="/borrow/products/" className=" typesquare_option">商品案内</a><a href="/borrow/entry/" className=" typesquare_option">申込方法</a><a href="/borrow/docs/" className=" typesquare_option">必要書類</a><a href="/borrow/methods/" className=" typesquare_option">借入方法</a><a href="/borrow/limit/" className=" typesquare_option">ご利用限度額の増額</a><a href="/membership/repeat/" className=" typesquare_option">再度ご利用のお客様</a></dd>
									</dl>
									<dl className="pc typesquare_option">
										<dt className=" typesquare_option"><a href="/shop/" className=" typesquare_option">店舗・ATM</a></dt>
										<dd className=" typesquare_option"><a href="https://shop.aiful.co.jp/" target="_blank" className=" typesquare_option">店舗検索</a><a href="/shop/partners/" className=" typesquare_option">提携ATM一覧</a><a href="/shop/prefectures/" className=" typesquare_option">都道府県から探す</a><a href="/shop/statement/" className=" typesquare_option">ATM利用明細書の見方</a></dd>
									</dl>
								</div>
								{/* <!---PC3列目---> */}
								<div className="menu_column typesquare_option">
									<dl className="pc typesquare_option">
										<dt className=" typesquare_option"><a href="/repay/" className=" typesquare_option">返すとき</a></dt>
										<dd className=" typesquare_option"><a href="/repay/how/" className=" typesquare_option">返済方法</a><a href="/repay/interest/" className=" typesquare_option">利息</a><a href="/repay/deadline/" className=" typesquare_option">返済期日</a><a href="/repay/bullet/" className=" typesquare_option">一括でのご返済</a><a href="/repay/simulation/" className=" typesquare_option">返済シミュレーション</a><a href="/repay/chart/" className=" typesquare_option">返済一覧表</a><a href="/repay/important_point/" className=" typesquare_option">返済時の注意点</a></dd>
									</dl>
									<dl className="pc typesquare_option">
										<dt className=" typesquare_option"><a href="/sploan/" className=" typesquare_option">スマホローン</a><a className="open_trigger sp" href="javascript:void(0)"></a></dt>
										<dd className=" typesquare_option"><a href="/sploan/app/" className=" typesquare_option">スマホアプリのご紹介</a>
										</dd>
									</dl>
								</div>
								{/* <!---PC4列目---> */}
								<div className="menu_column typesquare_option">
									<dl className="pc typesquare_option">
										<dt className=" typesquare_option"><a href="/membership/" className=" typesquare_option">ご利用中のお客様</a></dt>
										<dd className=" typesquare_option"><a href="/membership/account/" className=" typesquare_option">会員ログインID・パスワードのご案内</a><a href="/membership/aimail/" className=" typesquare_option">aiメール</a><a href="/membership/notification/" className=" typesquare_option">取引通知メール</a></dd>
									</dl>
									<dl className="pc AIFULCLS23032801 typesquare_option">
										<dt className=" typesquare_option"><a className="AIFULCLS23032801__head typesquare_option">法人事業のご案内</a></dt>
										<dd className=" typesquare_option"><a href="/biz/" target="_blank" className=" typesquare_option">法人のお客様</a><a href="/borrow/products/group/" className=" typesquare_option">グループ商品のご案内</a></dd>
									</dl>
									{/* <!---2023.6.1追加 start----> */}
									<dl className="pc AIFUL20230601001 typesquare_option">
										<dt className=" typesquare_option"><a href="/notice/" className=" typesquare_option">アイフルからのお知らせ</a>
										</dt>
									</dl>
									{/* <!---2023.6.1追加 end----> */}
								</div>
							</div>

							<div className="menu_close">
								<a
									className={`nav_trigger ${isOpen ? 'open' : ''}`}
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setIsOpen(!isOpen);
										document.body.classList.toggle('nav-open');
									}}
									aria-expanded={isOpen}
									aria-label="メニューの切り替え"
								>
									{isOpen ? (
										<span className="nav_close_icon">×</span>
									) : (
										<>
											<span className="nav3line"></span>
											<span className="nav3line"></span>
											<span className="nav3line"></span>
											<span>メニュー</span>
										</>
									)}
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default HeaderNav;
