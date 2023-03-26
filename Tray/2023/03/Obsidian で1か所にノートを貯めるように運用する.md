---
aliases: []
tags: [Obsidian/設定]
---

# Obsidian で1か所にノートを貯めるように運用する

## 問題：フォルダで管理すると，どこに保存して良いか迷ってしまう

- 該当するフォルダが複数あって，迷うかもしれない
- 該当するフォルダが見つからないかもしれない

## 解決策：ノートを1か所に保存する

- ノートを1か所に保存する
    - → **どんなことでも，とりあえずメモできるようになる**

### 準備：作成した年・月でノートをフォルダ分けできるようにする

1. Settings > Options > Files & Links
    - Default location for new notes を In the folder specified below にする
    - Folder to create new notes in を `Tray` にする
2. [[おすすめの Plugin#Templater|Templater]] を導入する
3. Settings > [[おすすめの Plugin|Community plugins]] > [[おすすめの Plugin#Templater|Templater]] の設定
    - General Settings > Template folder location を `Templates/Templater/templates` にする
    - General Settings > Trigger Templater on new file creation を有効にする
    - Folder Templates > Add New で以下の情報を追加する
        - Folder: `/`
        - Template: `Templates/templates/TrayNoteTemplate.md`
    - Use Script Functions > Script files folder location を `Templates/Templater/scripts` にする
4. ルート直下に `Tray` を作成する
    - 作成しておかないと，ルート直下に作成されたりする

### 使い方：ファイルのアクセス or 作成

1. `command + o` で [[おすすめの Plugin|Core plugins]] の Quick switcher を開く
    - `command + o` : "Quick switcher: Open quick switcher"
2. 検索バーに作成したいタイトルを入力
    - 既に作りたい感じのファイルが存在したらそのまま `↵`
    - 新規で作りたい場合は `shift + ↵`

### 注意点：`Tray` 直下にとどまることがある

- ノートのタイトルが `2023-03-26T1328` のようなフォーマットで始まる場合，未整理のフォーマットとして，`Tray` 直下にとどまるようにしてあります
- `Tray` 直下から移動させる方法
    1. ノートのタイトルを，例えば `2023-03-26 〜のメモ`  に変更する
    2. "Templater: Open Insert Template modal" でコマンド一覧を開き，"MoveScatteredFile" を選択する
        - → 作成日に基づいてノートが移動する

> [!tips] "Templater: Open Insert Template modal" の実行方法
> 
> - コマンドパレット（`command + p`）を開き，"modal" などと入力して選択する
> - ホットキーを割り当てておく
>     - デフォルトは `option + e` だが機能しないはずなので，別のホットキーを割り当てる必要がある
> 
> > [!info] ホットキーの割り当て方
> > 
> > - Settings > Options > Hotkeys
> >     1. キーワードを入力するなどして割り当てたいコマンドを見つける
> >     2. <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> をクリックし任意のホットキーを割り当てる
> 
> > [!hint] よく使う機能には，ホットキーを割り当てておこう
> > 
> > "Open daily note", "Open next daily note", "Toggle left sidebar" などは割り当てておくと良さそうです．

## 解決策：タグで分類・階層化する

- [[Obsidian のタグ]] を使う
    - **1つのノートに対し複数のタグを付与できる**
    - [[Obsidian のタグ#Nested tags]] の機能により，階層化もできる
    - タグごとに対応するノートを作ると捗るかもしれない

### 準備：タグの入力・管理を楽にする

- [[おすすめの Plugin#FuzzyTag|FuzzyTag]] を導入する
- [[おすすめの Plugin#Tag Wrangler|Tag Wrangler]] を導入する

## 参考になるサイト

- [ノートはフォルダでカテゴリ分けして整理せずにリンクによってネットワーク構造を作る - jmatsuzaki](https://jmatsuzaki.com/archives/27048)
    - フォルダ分けが機能しない理由について書かれている
- [メモを極めたエンジニア（弟）の"Notionの中身"が凄いので紹介させて下さい。 \- YouTube](https://www.youtube.com/watch?v=cCK_hGfi2cY)
    - [[Notion]] での実践方法が紹介されている