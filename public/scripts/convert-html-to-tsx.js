const fs = require("fs");
const path = require("path");

// HTML React Parser のデフォルトエクスポートを使用
const parse = require('html-react-parser');

// HTML ソースのパス
const HTML_SOURCE_PATH = path.join(__dirname, "../public/cms-pages/");
const OUTPUT_PATH = path.join(__dirname, "../src/pages/");

// 出力ディレクトリが存在しない場合は作成
if (!fs.existsSync(OUTPUT_PATH)) {
	fs.mkdirSync(OUTPUT_PATH, { recursive: true });
}

// 既存の CMS HTML ページを TSX に変換して Next.js ページとして出力
const convertHtmlToTsx = (htmlFilePath, outputTsxPath) => {
	const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");

	// TSX として出力（htmlContent をそのまま文字列として渡す）
	const tsxContent = `
import React from 'react';
import parse from 'html-react-parser';

const PageComponent = () => {
  return (
    <>
      {parse(\`${htmlContent}\`)}
    </>
  );
};

export default PageComponent;
  `;

	// 出力先の TSX ファイルとして保存
	fs.writeFileSync(outputTsxPath, tsxContent, "utf-8");
	console.log(`✅ 変換完了: ${outputTsxPath}`);
};

// CMS ページのディレクトリを走査し、全ての HTML ファイルを TSX に変換
fs.readdirSync(HTML_SOURCE_PATH).forEach((file) => {
	if (file.endsWith(".html")) {
		const htmlFilePath = path.join(HTML_SOURCE_PATH, file);
		const outputTsxPath = path.join(OUTPUT_PATH, file.replace(".html", ".tsx"));
		convertHtmlToTsx(htmlFilePath, outputTsxPath);
	}
});
