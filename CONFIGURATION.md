# ファイル構成
## 📂 cli_tools
CLI(コマンドライン)ツールを置いてあるディレクトリ

- ** compile_operator_overload.js: **
  modules/src/**.tsのファイルの演算子を関数(add、sub、mul、div等)に変換してmodules/lib/**.tsに出力する。
- ** exec_test.js: **
  test/**.tsにあるテストファイル引数として受けてtest_js/**.jsに出力して実行する。
- ** exec_test_all.js: **
  test/**.tsにあるすべてのテストファイルをトランスパイル・実行する。

## 📂 babel_plugin
- ** operator_overload.js: **
  演算子オーバーロードをするプラグイン
- ** transform-static-import-to-dynamic.js: **
  Webプレイグランドで主に使われる。`import hoge form ...`を`const hoge = await import(...)`に変換する。ドメイン名変更も含まれる。

## 📂 modules
科学計算系ツールのライブラリ

### 📂 src
演算子が直接書かれたTSファイル

### 📂 lib
演算子が関数に変換されたTSファイル、手書きのファイルも混じっている。

### 📂 dist
JSから読み込んで実行できるようになったJSファイル

## 📂 pages
Webプレイグラウンドのディレクトリ

## 📂 julia
juliaによる検証用