---
title: Reflow oven & stencil jig
sidebar_position: 80
description: Promised by the kit list, not on the bench inventory. Induction will be required.
---

# Reflow oven & stencil jig

| | |
| --- | --- |
| **Make / model** | _needs an answer_ |
| **Location** | 02 — electronics lab |
| **Maintainer** | _needs an answer_ |
| **Induction** | **Will be required** |
| **Status** | **Unconfirmed** — not on the 15 Oct 2026 bench inventory |
| **Manual** | _needs an answer_ |

:::warning[This page describes a tool nobody has confirmed exists]
The landing page's kit list promises one reflow oven and one stencil jig. The electronics
bench inventory of 15 October 2026 does not list them. Either it is elsewhere in the lab and
needs adding to the inventory, or it is aspirational and this page should say so.

**Nothing below is verified against a real machine.** Whoever commissions the oven should
rewrite this page from the actual unit.
:::

## What it is for

Populating a whole board at once: paste through a stencil, place the parts, run a profile.
Beyond about thirty parts this beats hand-soldering, and for bottom-terminated packages it is
the only sane option.

Until it exists, that work is [hot air](./hot-air-gun.md) and patience.

## Why it will need an induction

Not negotiable, for three reasons that apply to any reflow oven:

1. **It is hot enough to burn badly**, and the board stays hot long after the beep.
2. **It drives off flux solvent** and so needs ducted extraction, like the
   [fume snorkel](./fume-snorkel.md) but more so.
3. **It is the easiest machine in a lab to start a fire with**, because people set a profile
   and walk away. The rule will be the same as the workshop's: *never left running
   unattended* — see [Layout](../../the-space/layout.md).

## What this page needs before anyone uses it

- Make and model, and the real manual.
- The profile library, and which profiles match the pastes the space stocks.
- Thermocouple placement, and whether the controller profiles against board or air.
- Extraction arrangement and whether it is interlocked.
- Where paste is stored, and who checks the dates.
- The fire procedure, agreed with whoever did the building's fire risk assessment.
- A named maintainer.

## Links

- [Tool page template](../tool-page-template.md) — rewrite this page from it
- [Induction matrix](../../safety/induction-matrix.md)
