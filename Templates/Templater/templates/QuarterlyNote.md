<%*
const unit = 'quarter';
const qFormat = '[[[]YYYY-[Q]Q[]]]';
const prev = date.clone().subtract(1, unit);
const next = date.clone().add(1, unit);
-%>
---
aliases: []
tags: [CE/<% date.format('YYYY') %>, diary/<% unit %>ly]
---

# <% date.format('Qo [Quarter] YYYY') %>

<< <% prev.format(qFormat) %> | <% next.format(qFormat) %> >>

## Review
