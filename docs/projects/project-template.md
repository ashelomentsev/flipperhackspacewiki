---
title: Project template
sidebar_position: 2
description: Start a project page from your browser. Keep the headings; fill in what you have.
---

# Project template

**Keep the headings.** People skim for "what I need help with", and it should always be
in the same place.

## Start one from your browser

No checkout needed — see [Editing this wiki](../contributing.md).

1. **Copy the template** below with the copy button on the block.
2. **[Open a new file in `docs/projects/`](https://github.com/ashelomentsev/flipperhackspacewiki/new/main/docs/projects).**
3. **Name it after the project** — `walking-robot.md`. Lowercase, hyphens, ending `.md`.
4. **Paste, fill in what you have**, then **Commit changes → Propose changes**.
5. **Add a row to the [projects list](./index.md)** — that is a second, separate edit.

Everything below the line is the template. Do not copy this intro.

---

```markdown
---
title: <Project name>
sidebar_position: 10
description: <One line: what it is. Write this for someone scrolling a list.>
---

# <Project name>

| | |
| --- | --- |
| **Member** | <Your name, or your Telegram handle> |
| **Started** | <Month and year> |
| **Status** | Active / Stalled / Dormant / Done |
| **Looking for** | <The short version. "Someone who has done CAN bring-up", "a spare STM32G4", "nothing, just logging"> |
| **Tools used** | <Links to the tool pages — handy for the next person doing something similar> |
| **Code / files** | <Repo, or "ask me"> |

## What it is

<Two or three sentences. What you are making, and why you want it to exist. Assume the reader
has never heard of it and is deciding whether to keep reading.>

## Where it has got to

<Honest state. What works, what doesn't, what you haven't started. A bullet list is fine.>

## What I need help with

<**The part people read.** Be specific: "why does the gate driver let go above 4 A" gets an
answer; "any tips welcome" does not. Nothing is also a valid answer — say so and people will
leave you alone.>

## Decisions and why

<The choices you made and the reason, so future-you can argue with past-you. Part choices,
architecture, the approach you abandoned and why. This is the section you will thank yourself
for.>

## Log

<Dated entries, newest first. Short. This is a lab notebook, not a blog.>

### <Date>

<What you did, what happened, what you learned.>

## Things that went wrong

<Separate from the log on purpose. The failures, with the cause if you found it. The most
valuable section on the page for anyone else, and the one everybody leaves out.>

## Links

<Datasheets, the forum thread that solved it, the paper, the project you copied from.>
```

## Notes on filling it in

- **Write it as you go.** A page written at the end is a page with all the interesting parts
  missing.
- **"Looking for" is the load-bearing field.** Keep it current — it is what makes the page do
  something rather than just record something.
- **Photos of failures beat photos of successes.** A cracked joint, a browned-out board, a print
  that let go at layer 300.
- **Public build.** Check [Responsible use](../flipper/responsible-use.md) and the not-on-the-wiki
  list in [Editing this wiki](../contributing.md) before you publish captures, dumps or anything
  with a credential in it.
