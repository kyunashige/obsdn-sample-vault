<%*
const unit = 'week';
const dddFormat = 'YYYY-MM-DD_ddd';
const dFormat = 'YYYY-MM-DD';  // moment.HTML5_FMT.DATE
const wFormat = '[[[]GGGG-[W]WW[]]]';  // moment.HTML5_FMT.WEEK
const prev = date.clone().subtract(1, unit);
const next = date.clone().add(1, unit);
const sevenDays = [...Array(7).keys()].map(num => date.clone().add(num, 'day'));
-%>
---
aliases: []
tags: [CE/<% date.format('GGGG') %>, diary/<% unit %>ly]
---

# <% date.format("[Week] WW, GGGG") %>

<< <% prev.format(wFormat) %> | <% next.format(wFormat) %> >>

## Days

<% sevenDays.map(day => `- [[${day.format(dddFormat)}]]`).join("\n") %>

## Review


## Notes

```dataview
LIST
FROM ""
WHERE date(<% date.format(dFormat) %>) <= file.mtime and file.mtime < date(<% next.format(dFormat) %>)
SORT file.mtime asc
```
