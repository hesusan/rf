##rf

###**2015/09/18～2015/09/21の変更点**

**マイアカウントの追加**
- メニューはJS管理のため、表示状態。

**プロジェクトページの完成**
- 各タブはJS管理のため、表示状態。

**ラベルの追加**
- 各プロジェクトエントリーにラベルを付けるため、構造を変更。
  - 具体的には、エントリーの各イメージにマスク用のタグを追加。
  
**ログインモーダルの調整**
- 非表示状態で置かれている。

###**実装内容**

- HTML/CSSのみ
- 作業の都合上、phpを採用して共通モジュールをincludeしている。
-実際の組み込みに当たっては、htmlとして分解すること。
- CSSはscssで管理されている。
- 後述するgulpによってコンパイルを行うこと。

###**管理方法**

- タスクランナーにgulpを採用している。
- /assets/ フォルダ内で該当コマンドを実行して作業を行う。

====
