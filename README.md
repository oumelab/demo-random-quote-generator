# React Road お題チャレンジ　- ランダム名言ジェネレーター -

プログラマーの名言をランダムに表示する Web アプリ。<br>
React の基礎フック（useState, useEffect）を学ぶ。

React の実践型学習プラットフォーム [React Road](https://react-road.b13o.com/) のお題 [ランダム名言ジェネレーター](https://react-road.b13o.com/challenges/random-quote-generator) に挑戦させていただいた学習プロジェクトです。

> [!NOTE]
> このリポジトリは、個人的な学習およびデモンストレーションの目的のみに使用されます。<br />
> This repository is for personal learning and demonstration purposes only.

<br />

## デモサイト・スクリーンショット

<div>
  <a href="https://oumelab.github.io/demo-random-quote-generator/" target+"_blank" style="font-weight: bold; font-size: 1.2rem;">👀 View Demo site</a>
</div>

<br>
<div style="width: 100%">
<a href="https://oumelab.github.io/demo-random-quote-generator/" target="_blank">
        <picture>
          <source srcset="./public/screenshot.webp" type="image/webp" />
          <img src="./public/screenshot.png" alt="トップページ" width="100%" />
        </picture>
        </a>
</div>
<br />

## お題

### 必須機能

- [x] ランダムな名言の表示 - サイトアクセス時にランダムな名言とその著者名を表示する
- [x] 名言の更新 - ボタンをクリックすると新しい名言をランダムに取得して表示する

### API

[**Tech Quotes API**](https://github.com/b13o/tech-quotes-api)

### 推奨機能

- **環境構築**: Vite + React + TypeScript
- **スタイリング**: Tailwind CSS
- API を利用したデータ取得と表示
- useState, useEffect フック
- GitHub Pages へのデプロイ

<br />

## 追加・変更した機能

- **エラーハンドリング**: React Error Boundary によるエラー処理
- **ローディング状態**: Suspense を使用したローディング表示
- **データフェッチ**: React 19 の `use` フックを使用したデータ取得パターン

<br />

## インストール

```bash
# 依存関係のインストール
bun install

# 開発サーバーの起動
bun run dev

# ビルド
bun run build

# プレビュー
bun run preview
```

<br />

## プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── button.tsx      # 名言取得ボタン
│   ├── footer.tsx      # フッター
│   ├── icon.tsx        # アイコンコンポーネント
│   └── quotes-card.tsx # 名言表示カード
├── lib/
│   └── index.ts        # API関連の関数と型定義
├── App.tsx             # メインアプリケーション
└── main.tsx
```

