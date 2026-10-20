---
title: Tool page template
sidebar_position: 2
description: Copy this file to create a new tool page. Keep the headings and the order.
---

# Tool page template

Copy this file into the folder for the floor the tool lives on, rename it after the tool,
and fill it in. **Keep the headings and their order** — people learn where to look, and a
tool page is read in a hurry.

Then add a row to the [register](./index.md).

Delete this intro from your copy. Everything below the line is the template.

---

```markdown
---
title: <Tool name, as it is labelled on the machine>
sidebar_position: 10
description: <One line: what it is for and whether it needs an induction.>
---

# <Tool name>

| | |
| --- | --- |
| **Location** | <Floor and bench, e.g. "02 — electronics lab, microscope row"> |
| **Quantity** | <e.g. ×4> |
| **Maintainer** | <Name, or "needs an answer"> |
| **Induction** | <Required / Short / Not required> |
| **Status** | <Working / Degraded — what is wrong / Out of service — since when> |
| **Manual** | <Link, or where the paper copy lives> |

<One paragraph: what it is, and what it is the right tool for. Mention the thing people
reach for it for and should not.>

## Induction

<What the sign-off involves and roughly how long. If none is required, say so and say what
you should still read first. Link the [induction matrix](../safety/induction-matrix.md).>

## Before you start

<A checklist. Numbered. The things that are wrong at the start of a session: the setting the
last person left, the consumable to check, the extraction to switch on, the PPE to put on.>

## Known quirks

<**The most valuable section on the page.** Everything true of this specific machine that is
not in the manual. One bullet per quirk. Include the ones that look like a fault and are not.
If you lost twenty minutes to something, write it here — the next person is you.>

## Consumables

<What it eats, where the stock is, what to do when you take the last one. Say what is paid
for by the space and what you bring yourself.>

## If it breaks

<Specific to this machine: anything safe to try first, and where to stop. Then the standard
route — tag it, Telegram, maintainer.>

## Links

<Manual, firmware, the forum thread that solved the recurring problem, the slicer profile
or project file the space uses.>
```

## Notes on filling it in

- **Status is load-bearing.** A member checks it before walking to the floor. If you break
  something, edit the status line before you leave the building.
- **Induction wording must match** the [induction matrix](../safety/induction-matrix.md).
  If the two disagree, the matrix wins and someone should fix the tool page.
- **Do not copy the manual.** Link it. The page is for what the manual does not say.
- **Dates on quirks** help: "since the Jan head swap" tells the next reader whether it still
  applies.
