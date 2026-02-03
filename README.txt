# EduFit 小6向け「私立中学準備講座」LP（静的HTML）

## 1) まず置き換えるもの（必須）
`index.html` 内の `__LINE_URL__` を **公式LINEのURL** に置き換えてください。

例：
- `https://lin.ee/XXXXXXXX` など

## 2) ローカルで確認する
このフォルダを開いて `index.html` をブラウザで開くだけで表示できます。
（JSはFAQ動作のみ。ローカルでもOK）

## 3) 公開（おすすめ：Netlify / Vercel）
### Netlify
1. Netlifyにログイン
2. 「Add new site」→「Deploy manually」
3. このフォルダをドラッグ&ドロップ

### Vercel
1. Vercelにログイン
2. 「New Project」→「Import」ではなく「Deploy」から静的サイトを選択
3. `index.html` を含むフォルダを指定

## 4) 既存サイト（WordPress）配下に置く場合
例：`https://edufit-jyuken.com/junior-prep/` に置きたい場合

- FTP/サーバーの `public_html/junior-prep/` を作成し
- このフォルダの中身をアップロード

## 5) OGP画像など
- `assets/ogp.png` を用意するとSNS表示が綺麗になります。
- `assets/favicon.png` も同様です。（現状はプレースホルダ想定）
