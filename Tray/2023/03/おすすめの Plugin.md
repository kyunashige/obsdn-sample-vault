---
aliases: [Core plugins, Community plugins]
tags: [Obsidian/拡張]
---

# おすすめの Plugin

<< [[Obsidian]]

> [!warning] ここでは雰囲気だけ紹介します
> 
> 細かい使い方は，それぞれの README 等をご参照ください．

> [!todo] Restricted mode はオフにしましたか？
> 
> [[おすすめの初期設定#Community plugins を使えるようにする]] を先に済ませておきましょう．

## もはや必須になりつつあるプラグイン

他のプラグインを使うために必要になることもある．

### Dataview

- [code](https://github.com/blacksmithgu/obsidian-dataview)
- 使用した場面
    - → [[WeeklyNote]]
    - → [[#DB Folder]]

### Style Settings

- [code](https://github.com/mgmeyers/obsidian-style-settings)
- 導入後，Settings > Options > Appearance > [[CSS snippets]]
    1. Override supercharged-links-gen を有効にする
    2. SVGs を有効にする
- [[CSS snippets]] を変更できる
    - → [[#Supercharged Links]]

### Templater

- [code](https://github.com/SilentVoid13/Templater)
- 使用した場面
    - → [[Obsidian で日記を書く#設定]]
    - → [[Obsidian で1か所にノートを貯めるように運用する#解決策：ノートを1か所に保存する]]

## 見た目

### Editor Syntax Highlight

- [code](https://github.com/deathau/cm-editor-syntax-highlight-obsidian)
- [[Obsidian の Metadata]] に色が付く
    - → [[おすすめの初期設定#Syntax Highlight を有効にする]]

### Supercharged Links

- [code](https://github.com/mdelobelle/obsidian_supercharged_links)
- メタデータに合わせてリンク・ファイル名を装飾できる
- 依存している plugin
    - ← [[#Style Settings]]

## タグ関連

<< [[Obsidian のタグ]]

### FuzzyTag

- [code](https://github.com/adriandersen/obsidian-fuzzytag)
- [[Obsidian の Metadata]] の [[Obsidian のタグ]] が入力しやすくなる
    - → [[Obsidian で1か所にノートを貯めるように運用する#準備：タグの入力・管理を楽にする]]

### Tag Wrangler

- [code](https://github.com/pjeby/tag-wrangler)
- [[おすすめの Plugin|Core plugins]] の Tags で [[Obsidian のタグ]] の一覧を表示できるが，編集ができないので導入する
    - → [[Obsidian で1か所にノートを貯めるように運用する#準備：タグの入力・管理を楽にする]]

## 日記関連

<< [[Obsidian で日記を書く]]

### Calendar

- [code](https://github.com/liamcain/obsidian-calendar-plugin)
- カレンダーを表示でき，クリックすると該当の日次メモが開く
    - → [[Obsidian で日記を書く#新規作成]]

### Periodic Notes

- [code](https://github.com/liamcain/obsidian-periodic-notes)
- 日次だけでなく，週次・月次・四半期・年次のメモを作成できる
    - → [[Obsidian で日記を書く#設定]]

## エディタ周り

### Admonition

- [code](https://github.com/valentine195/obsidian-admonition)
- [[Callout#Types]] を補完してくれる

### Advanced Tables

- [code](https://github.com/tgrosinger/advanced-tables-obsidian)
- 表の入力が便利になる

### Custom Attachment Location

- [code](https://github.com/RainCat1998/obsidian-custom-attachment-location)
- 添付ファイルの保存先を設定できる
    - → [[おすすめの初期設定#添付ファイルの保存先をノートごとに分ける]]

## ノート等を並べる

### Database Folder (DB Folder)

- [code](https://github.com/RafaelGB/obsidian-db-folder)
- [[Notion]] のデータベース風なことができる
    - e.g. [[All Notes @ Tray]]
- 依存している plugin
    - ← [[#Dataview]]

### Kanban

- [code](https://github.com/mgmeyers/obsidian-kanban)
- カンバンが使えるようになる
    - e.g. [[Tasks of obsdn-sample-vault]]

### Recent Files

- [code](https://github.com/tgrosinger/recent-files-obsidian)
- 直近で開いたノートのリストを表示できる
    - → [[おすすめの初期設定#直近で開いたノートのリストを表示できるようにする]]

## おまけ

### Diagrams.Net (Diagrams.net)

- [code](https://github.com/jensmtg/obsidian-diagrams-net)
- [[Obsidian]] の中で，[diagrams.net](https://diagrams.net/) (previously draw.io) と同じことができる
    - ![[puzzle-pieces.svg|100]]
    - "Edit diagram" で編集できる
        - $5 \times 7$ の長方形を作ってみてください[^1]

## 参考になるサイト

- [コミュニティプラグイン全集 改訂版](https://pouhon.net/obsidian-plugins2/7449/)
    - HUNTER×HUNTER の念能力になぞらえて紹介されている

[^1]: https://github.com/kyunashige/polyform-puzzle-solver/blob/main/puzzles/Polyomino/5x7-8p-1.yaml