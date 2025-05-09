// lib/meta.ts
type MetaOptions = {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  ogImageAlt?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  url,
  ogImage,
  ogImageAlt = 'OG画像',
  keywords = [],
}: MetaOptions) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
  };
}


// ページごとの定義もここに
export const pageMeta = {
  statement: {
    title: '愛がいちばん。アイフル ｜【消費者金融のアイフル公式】',
    description: '愛がいちばん。キャッシング・カードローンならアイフルへ。アイフルをはじめてご利用される方への特典サービスや、融資スピードなど、ご案内しています。',
    url: '/statement',
		ogImage: '/assets/common/images/ogp.jpgg',
    keywords: ['愛がいちばん。', '愛はあるんか', 'アイフル', 'カードローン'],
  },
  statementAbout: {
    title: 'アイフルってどんな会社？ ｜【消費者金融のアイフル公式】',
    description: '「誠実な企業活動を通じて、社会より支持を得る」を経営理念とし、真に社会から信頼していただける会社を実現すべく、実践に努めています',
    url: '/statement/about',
		ogImage: '/assets/common/images/ogp.jpg',
    keywords: ['アイフル', '企業理念', 'カードローン', 'キャッシング'],
  },
};
