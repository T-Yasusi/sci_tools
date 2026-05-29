# sci_tools

TypeScript / JavaScript を用いた、強力で直感的な科学計算ツール群（ライブラリおよび開発環境）です。
Julia を使ったクロスチェック（検算）環境も内包しています。

## 🚀 特徴 (Features)

- **直感的な数式記述（演算子オーバーロード）:**
  Babel Plugin を活用した演算子オーバーロードに対応。複素数や行列などの計算コードを、一般的な数式に近い直感的な記述で実装できます。
- **Web プレイグラウンド搭載:**
  Monaco Editor を採用した、ブラウザ上で動く VS Code ライクな Web プレイグラウンドを用意。環境構築なしですぐに計算を試せます。
- **充実したターミナル/CLI環境:**
  Node.js をベースとしたトランスパイル環境およびテスト環境を備えており、ローカルでの効率的な開発・検証が可能です。
- **Julia による検算環境:**
  JS/TS 側の計算結果の正当性を検証するため、科学計算に強い Julia を使った検算環境を合わせて提供しています。

## ⚙️ 動作環境 (Prerequisites)

- Node.js (LTS/最新環境推奨)
- yarn

## 📦 インストール方法 (Installation)

本プロジェクトはパッケージマネージャーに `yarn` を採用しています。リポジトリをクローン後、以下のコマンドで依存関係をインストールしてください。

```bash
# リポジトリのクローン
git clone 
cd sci_tools

# 依存関係のインストール
yarn install

# Pages(Webプレイグラウンドでの設定)
cd pages
yarn install
```

## 🛠️ 使い方 (Usage)
### ターミナル (Nodeツール)
```bash
# modules/src/**.ts modules/lib/**.tsへ変換(演算子オーバーロード)
yarn node cli_tools/AST_operator_overload.js

# modules/lib/**.ts modules/lib/**.jsへ変換
yarn tsc

# test/*.ts のテストTSをtest_js/*.jsに変換、実行
yarn cli_tools/exec_test.js test/**.ts
```

### Webプレイグラウンド
pagesディレクトリに移動後`yarn dev`でViteによるページを起動、その後アクセス

## 💻 デモ (Demo)
[Github page](https://t-yasusi.github.io/sci_tools/)を使ったデモも公開しています。

## 📝 ライセンス (License)
このプロジェクトは MIT License のもとで公開されています。
