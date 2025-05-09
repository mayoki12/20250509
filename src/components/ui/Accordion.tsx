"use client"; // App Routerを使っている場合

import { useState } from "react";
import styles from "@/components/ui/Accordion.module.scss"; // 任意。なければclassNameは文字列でOK

export default function Accordion() {
	const [isOpen, setIsOpen] = useState(true); // デフォルトで開いておくならtrue

	const toggleAccordion = () => {
		// Google Analytics のイベント送信（仮）※実装している場合
		// window.gtag?.("event", "accodion", { event_category: "新規ご契約のお客様" });
		setIsOpen(!isOpen);
	};

	const feedbacks = [
		{ text: "初めてで戸惑ったが親切に対応してくれて助かった。", ageGender: "（50代・男性）" },
		{ text: "とても丁寧に説明して貰って分かりやすかった。ありがとう。", ageGender: "（50代・女性）" },
		{ text: "消費者金融は初めてだが、即日カードが受け取れてしかも使えるなんて凄い。", ageGender: "（40代・女性）" },
		{ text: "ネットで調べた際、アイフルが親切に対応してくれると口コミを見て申し込んだ。", ageGender: "（30代・女性）" },
		{ text: "他社で断られたため困っていた。 融資してくれて助かった。 本当にありがとう。", ageGender: "（20代・男性）" },
		{ text: "短期間で融資してもらい助かった。 他で数週間かかると言われたため、有難い。", ageGender: "（60代・男性）" },
		{ text: "消費者金融で借りるのは不安だったが、会社も大きいし安心できると思い申し込んだ。", ageGender: "（60代・女性）" },
		{ text: "知り合いにアイフルの応対が丁寧と聞いた。CMのイメージ通りでとても良かった。", ageGender: "（30代・男性）" },
	];

	return (
		<div className={`${styles.accordion} ${isOpen ? "active" : ""}`}>
			<div className={styles.accordion_ttl} onClick={toggleAccordion}>
				<h3>新規ご契約のお客様</h3>
			</div>
			{isOpen && (
				<div className={styles.accordion_content}>
					<div className={styles.list}>
						<ul>
							{feedbacks.map((fb, index) => (
								<li key={index}>
									<p>{fb.text}</p>
									<p>{fb.ageGender}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
}
