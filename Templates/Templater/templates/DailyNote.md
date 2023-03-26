<%*
const dddFormat = '[[[]YYYY-MM-DD_ddd[]]]';
const prev = date.clone().subtract(1, 'week');
const config = tp.user.organizer(tp).getConfig(true);
const reviewFormat = ['Weekly', 'Monthly', 'Quarterly', 'Yearly']
    .map((type) => config[type])
    .map((cnfg) => `${cnfg.folderFormat}/${cnfg.format}|${cnfg.shortFormat}`)
    .map((link) => `[[[]${link}[]]]`)
    .join(' < ');
-%>
---
aliases: []
tags: [CE/<% date.format('YYYY') %>]
---

# <% date.format('dddd, MMMM Do, YYYY') %>

Last <% prev.format('dddd') %>: <% prev.format(dddFormat) %>
Periodic Review: <% date.format(reviewFormat) %>

## Progress

## Review

---
