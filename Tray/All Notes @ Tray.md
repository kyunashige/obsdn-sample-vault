---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 1
    isHidden: false
    sortIndex: -1
    width: 286
    isSorted: false
    isSortedDesc: false
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      content_alignment: text-align-left
      content_vertical_alignment: align-middle
      wrap_content: true
  tags:
    input: tags
    accessorKey: tags
    key: tags
    id: tags
    label: tags
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: 1
    width: 181
    isSorted: true
    isSortedDesc: true
    options:
      - { label: "Obsidian/拡張", value: "Obsidian/拡張", color: "hsl(8,93%,88%)"}
      - { label: "Obsidian/設定", value: "Obsidian/設定", color: "hsl(236,93%,88%)"}
      - { label: "エディタ/マークダウン", value: "エディタ/マークダウン", color: "hsl(193,93%,88%)"}
      - { label: "Obsidian", value: "Obsidian", color: "hsl(264,93%,88%)"}
      - { label: "Obsidian/機能", value: "Obsidian/機能", color: "hsl(145, 95%, 90%)"}
      - { label: "Obs", value: "Obs", color: "hsl(349, 95%, 90%)"}
      - { label: "Obsidi", value: "Obsidi", color: "hsl(191, 95%, 90%)"}
      - { label: "O", value: "O", color: "hsl(208, 95%, 90%)"}
      - { label: "Web/App", value: "Web/App", color: "hsl(166, 95%, 90%)"}
      - { label: "Notion", value: "Notion", color: "hsl(343, 95%, 90%)"}
      - { label: "<% tp.user.organizer(tp).getTags() %><% tp.file.cursor(1) %>", value: "<% tp.user.organizer(tp).getTags() %><% tp.file.cursor(1) %>", color: "hsl(3, 95%, 90%)"}
      - { label: "App/Desktop", value: "App/Desktop", color: "hsl(248, 95%, 90%)"}
      - { label: "App/Web", value: "App/Web", color: "hsl(171, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
      content_alignment: text-align-left
      content_vertical_alignment: align-middle
      wrap_content: true
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: Templates/Templater/templates
  current_row_template: Templates/Templater/templates/TrayNoteTemplate.md
  pagination_size: 100
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```