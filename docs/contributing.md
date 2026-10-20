---
title: Editing this wiki
sidebar_label: Editing this wiki
sidebar_position: 90
description: Fix a page from your browser in about two minutes. No install, no command line.
---

# Editing this wiki

**You can fix any page on this wiki from your browser, in about two minutes.** No
install, no command line, no checkout. You need a GitHub account and nothing else.

The wiki is Markdown in
[flipperhackspacewiki](https://github.com/ashelomentsev/flipperhackspacewiki), under
`docs/`. The repo is public, so anyone can propose a change.

## Fixing a page

1. **Scroll to the bottom of the page you want to fix** and click
   **Edit this page on GitHub**. It opens that exact file in GitHub's browser editor.
2. **Sign in to GitHub** if you are not already. You land back on the same file.
3. **Edit the text.** It is Markdown — see [the formatting you need](#the-formatting-you-need),
   which is about six things.
4. **Click `Commit changes…`**, top right.
5. **Write one line saying what you changed.** "Bench meter fuse rating is 500 mA, not
   250" is a good one. "Update" is not.
6. **Click `Propose changes`.**

That is it. You have opened a pull request. Someone reviews it, merges it, and the wiki
rebuilds itself.

:::note[You do not need permission first]
If you do not have write access to the repo — most people will not — GitHub quietly
makes you a personal copy (a *fork*) the moment you start typing, and proposes the
change from there. You may see a banner saying so. Nothing is wrong; carry on.
:::

The exact buttons move as GitHub changes its interface. The shape is always the same:
**edit → commit → propose**. If you are offered a choice between committing straight to
`main` and creating a branch with a pull request, take the pull request.

## Adding a new page

Same idea, one extra step: you choose the filename.

1. **Open the template** — the [tool page template](./tools/tool-page-template.md) or the
   [project template](./projects/project-template.md).
2. **Click the copy button** on the template block.
3. **Click the create-a-new-page link** on that same page. GitHub opens an empty file
   with the folder already set.
4. **Change the filename** to describe your page — `walking-robot.md`. Lowercase, hyphens
   between words, ending `.md`.
5. **Paste the template**, fill it in, then **commit and propose** as above.

**The sidebar updates itself.** It is generated from the folder tree, so a new file in the
right folder appears on its own. There is no index to edit — though the
[tool register](./tools/index.md) and the [projects list](./projects/index.md) each have a
table worth adding a row to.

## The formatting you need

Markdown, and realistically six things:

```markdown
## A heading

**Bold** for the thing that will bite someone. *Italic* rarely.

- A bullet
- Another one

1. A numbered step
2. The next one

[A link to another page](../safety/ppe.md)

`a setting, a filename or a value`
```

Three conventions that are ours rather than Markdown's:

**Links between pages are relative and end in `.md`** —
`[induction matrix](../safety/induction-matrix.md)`. `../` means "up one folder". The build
**fails** on a broken link rather than warning, which is deliberate: a dead link in a safety
page is worse than a failed deploy. Propose the change anyway if you are unsure — a failed
build shows up on your pull request and is easy to fix.

**Marking what nobody has confirmed.** Any fact that is still a guess gets this box, so a
reader can tell house policy from someone's assumption:

```markdown
:::info[Needs a real answer]
What is missing, and who would know it.
:::
```

Do not quietly delete that box when you edit around it. Delete it when you have replaced
the guess with the real answer.

**Frontmatter** is the block between `---` lines at the very top. Every page needs `title`,
`sidebar_position` and `description`. Leave it alone unless you are renaming or reordering
a page.

**Tone.** Short sentences. Imperative for procedures. Say the thing that will bite someone
rather than the thing that sounds complete. The known-quirks section on a tool page is the
most valuable part of this wiki.

## What needs review before it lands

Most pages: propose it and it gets merged without ceremony. Tool quirks, a setting that
works, a project page, a fixed typo, a reordered section — just send it.

Three kinds of change need a second pair of eyes:

| Change | Who signs it off |
| --- | --- |
| Safety procedure, PPE, or an induction requirement | The tool's maintainer **and** a space lead |
| [Code of conduct](./how-we-run/code-of-conduct.md) or [responsible use](./flipper/responsible-use.md) | A space lead — these two pages have legal weight |
| Membership terms or pricing | Flipper Technologies Ltd, not the membership |

## What does not belong here

**The wiki is a public build and the repo is public.** Anything you put here is readable by
anyone, forever — including in the commit history after someone deletes it.

- **No door codes, passwords, key locations or wifi PSKs.** Those live in the members'
  Telegram, nowhere else.
- **No members' personal details.** Names are fine where someone agreed to be listed as a
  maintainer. Phone numbers and addresses are not.
- **Nothing [responsible use](./flipper/responsible-use.md) rules out** — no captures, card
  dumps or credentials.
- **No chat.** Discussion goes to Telegram; the wiki records what was decided.

## If you would rather work locally

You do not need to. But for a large edit, or to check a page renders before proposing it:

```bash
git clone https://github.com/ashelomentsev/flipperhackspacewiki.git
cd flipperhackspacewiki
npm install
npm run dev          # http://localhost:3000/
```

Edit the Markdown, watch it hot-reload, push a branch, open a pull request.

`npm run build` runs the same build as the deploy, including the broken-link check — worth
doing before a big change.
