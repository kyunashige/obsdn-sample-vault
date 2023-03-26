<%*
const unit = 'year';
const yFormat = '[[[]YYYY[]]]';
const prev = date.clone().subtract(1, unit);
const next = date.clone().add(1, unit);
-%>
---
aliases: [<% date.format('YYYY') %>年]
tags: [CE/<% date.format('YYYY') %>, diary/<% unit %>ly]
---

# <% date.format('YYYY') %>

<< <% prev.format(yFormat) %> | <% next.format(yFormat) %> >>

## Review
