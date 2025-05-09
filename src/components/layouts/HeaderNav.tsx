'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '@/components/layouts/Header/HeaderNav.module.scss'

export default function NavMenu() {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const handleOpenMenu = () => {
		setMenuOpen(true)
	}

	const handleCloseMenu = () => {
		setMenuOpen(false)
	}

	const sendGA = (category: string, label: string) => {
		if (typeof window !== 'undefined' && (window as any).ga) {
			(window as any).ga('send', 'event', category, label)
		}
	}

	const entry = () => {
		sendGA('HBtn', 'お申込み')
		// Entry() の代替処理が必要であればここに追加
	}

	const funcOwmEntry = () => {
		sendGA('HBtn', 'お申込み')
		// func_owmentry() の代替処理が必要であればここに追加
	}

	return (
		<div id="renew">
			<header>
				<div className={styles.inner}>
					<div className={styles.inner_logo}>
						<p className={styles.AIFULCLS20240705002}>
							<span>消費者金融のアイフル</span>
						</p>
						<p className={styles.AIFULCLS20240705001}>
							<a href="@@@include:TOPURL.body@@@">
								<img src="/assets2/images/header/logo.svg" alt="消費者金融のアイフル" />
							</a>
						</p>
					</div>
					<ul className={`${styles.links} ${styles.pc}`}>
						<li><a href="/borrow/">借りるとき</a></li>
						<li><a href="/repay/">返すとき</a></li>
					</ul>
				</div>
			</header>

			<nav className={styles.nav}>
				<div className={`${styles.nav_btn} ${styles.static}`}>
					<a
						href="#"
						className={`${styles.nav_entry} ${styles.notowm}`}
						onClick={(e) => {
							e.preventDefault()
							entry()
						}}
					>
						<span>お申込み</span>
					</a>
					<a
						href="#"
						className={`${styles.nav_entry} ${styles.owm}`}
						onClick={(e) => {
							e.preventDefault()
							funcOwmEntry()
						}}
					>
						<span>お申込み</span>
					</a>
					<Link
						href="/member/"
						className={styles.nav_member}
						onClick={() => sendGA('HBtn', '会員ログイン')}
					>
						<span>会員ログイン</span>
					</Link>
					<a className={styles.nav_trigger} onClick={handleOpenMenu}>
						<span className={styles.nav3line}></span>
						<span className={styles.nav3line}></span>
						<span className={styles.nav3line}></span>
						<span>メニュー</span>
					</a>
				</div>

				{isMenuOpen && (
					<div className={styles.menu}>
						<div className={styles.menu_inner}>
							<div className={styles.nav_btn}>
								<a
									href="#"
									className={`${styles.nav_entry} ${styles.notowm}`}
									onClick={(e) => {
										e.preventDefault()
										entry()
									}}
								>
									<span>お申込み</span>
								</a>
								<a
									href="#"
									className={`${styles.nav_entry} ${styles.owm}`}
									onClick={(e) => {
										e.preventDefault()
										funcOwmEntry()
									}}
								>
									<span>お申込み</span>
								</a>
								<Link
									href="/member/"
									className={styles.nav_member}
									onClick={() => sendGA('HBtn', '会員ログイン')}
								>
									<span>会員ログイン</span>
								</Link>
								<a className={styles.nav_trigger} onClick={handleCloseMenu}>
									<span>閉じる</span>
								</a>
							</div>

							<div className={styles.menu_center}>
								<div className={styles.campaign}>
									{/* キャンペーンなどのリンクがあればここに挿入 */}
								</div>

								{/* @@@include:bMenuSearch.body@@@ → ここにコンポーネントを挿入可 */}

								<div className={styles.menu_row}>
									{/* menu_column や dl, dt, dd のパーツもコンポーネントに分離可能 */}
									{/* 例: <MenuColumn title="借りるとき" links={[{ href: "/borrow/products", text: "商品案内" }]} /> */}
								</div>
							</div>
						</div>
					</div>
				)}
			</nav>
		</div>
	)
}
