<%*
const unit = 'month';
const mFormat = '[[[]YYYY-MM[]]]';
const prev = date.clone().subtract(1, unit);
const next = date.clone().add(1, unit);
-%>
---
aliases: []
tags: [CE/<% date.format('YYYY') %>, diary/<% unit %>ly]
---

# <% date.format('MMMM, YYYY') %>

<< <% prev.format(mFormat) %> | <% next.format(mFormat) %> >>

## Review
