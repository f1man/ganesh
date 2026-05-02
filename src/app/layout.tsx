import type { Metadata } from "next";
import { Cormorant_Garamond, Zen_Kaku_Gothic_New, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-cormorant",
});

const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-kr",
});

export const metadata: Metadata = {
  title: "Motioning Care | プレミアム医療コンシェルジュ",
  description: "あなたのバケットリストを「実現できる計画」に変える、医療知識を持ったスタッフによるプレミアムな同行サポート。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${zenKaku.variable} ${notoSansKR.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
