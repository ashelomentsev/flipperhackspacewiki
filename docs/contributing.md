---
title: Editing this wiki
sidebar_label: Editing this wiki
sidebar_position: 90
description: How to add or fix a page, the conventions to follow, and what needs review before it lands.
---

# Editing this wiki

The wiki is Markdown in [flipperhackspacewiki](https://github.com/ashelomentsev/flipperhackspacewiki), under `docs/`. It builds with
[Docusaurus](https://docusaurus.io) and deploys on its own.

## Making a change

```bash
npm install
npm run dev     # http://localhost:3000/
```

Edit the Markdown, watch it hot-reload, open a pull request.

Adding a page means adding one file — the sidebar is generated from the folder tree, so there is no index to update.

## Conventions

**Frontmatter.** Every page needs `title` and `sidebar_position`. Tool pages also carry
`maintainer`, `induction`, `location` and `status` — see the
[tool page template](./tools/tool-page-template.md).

**Marking what isn't verified.** Any page or section stating a fact nobody has confirmed
gets this box, so a reader can tell the difference between house policy and a guess:

```markdown
:::info[Needs a real answer]
What is missing, and who would know it.
:::
```

Do not quietly delete the box when you edit around it. Delete it when you have replaced
the guess with the real answer.

**Links between pages** use relative paths with the `.md` extension —
`[induction matrix](../safety/induction-matrix.md)`. The build fails on a broken one, which
is deliberate: a dead link in a safety page is worse than a failed deploy.

**Tone.** Short sentences. Imperative for procedures. Say the thing that will bite someone
rather than the thing that sounds complete. The known-quirks section on a tool page is the
most valuable part of this wiki.

## What needs review before it lands

Most pages: anyone can edit, no review, just push.

Three kinds of change need a second pair of eyes before merging:

| Change | Who signs it off |
| --- | --- |
| Safety procedure, PPE, or an induction requirement | The tool's maintainer **and** a space lead |
| [Code of conduct](./how-we-run/code-of-conduct.md) or [responsible use](./flipper/responsible-use.md) | A space lead — these two pages have legal weight |
| Membership terms or pricing | Flipper Technologies Ltd, not the membership |

Everything else — tool quirks, settings that work, a project page, a fixed typo, a
re-ordered section — just land it.

## What does not belong here

- **Anything with a door code, a password, a key location or a wifi PSK.** The wiki is a
  public build. Those live in the members' Telegram, nowhere else.
- **Members' personal details.** Names are fine where someone has agreed to be listed as a
  maintainer. Phone numbers and addresses are not.
- **Chat.** Discussion goes to Telegram; the wiki records what was decided.
