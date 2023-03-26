---
aliases: []
tags: [Obsidian]
---

# Obsidian で日記を書く

## 設定

1. Settings > Options > [[おすすめの Plugin|Core plugins]]
    - Daily notes を無効にする
2. [[おすすめの Plugin#Periodic Notes|Periodic Notes]] を導入する
    - 保存先の設定を行う
3. [[おすすめの Plugin#Calendar|Calendar]] を導入する
4. [[おすすめの Plugin#Templater|Templater]] を導入する
    - [[PeriodicNote]] を準備する
5. Settings > Community plugins > Templater の設定
    - General Settings > Template folder location を `Templates/Templater/templates` にする
    - General Settings > Trigger Templater on new file creation を有効にする
    - Folder Templates > Add New で以下の情報を追加する
        - Folder: `/Diary`
        - Template: `Templates/Templater/templates/PeriodicNote.md`
        - [[Obsidian で1か所にノートを貯めるように運用する]] より上位に設定する
    - Use Script Functions > Script files folder location を `Templates/Templater/scripts` にする

### 新規作成

- Daily Notes
    - [[おすすめの Plugin#Calendar|Calendar]] のカレンダーの日付をクリックして作成する
- Daily Notes 以外
    - 該当の日次メモからリンクをクリックして作成する

## References

- []()