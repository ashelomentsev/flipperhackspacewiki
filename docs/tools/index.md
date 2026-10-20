---
title: Tools & equipment
sidebar_position: 1
description: The tool register — every machine in the space, who maintains it, and whether it needs an induction.
---

# Tools & equipment

One page per tool. Each page says who maintains it, whether you need an induction, and — the
useful part — the quirks that are not in the manual.

## Two sources, and they disagree

Worth knowing before you trust a row below:

- **The [electronics bench](./electronics/index.md) is real.** Twenty-two items, inventoried on
  **15 October 2026**, with make and model for each. Those pages describe kit that exists.
- **The workshop and RF bench are from the landing page's kit list**, which is marked as
  placeholder in the site source. Those pages describe what the space says it will have. They
  are flagged as unconfirmed at the top of each page.

Where the two disagree, the inventory wins and the landing page needs correcting.

:::info[Maintainers are not assigned]
Every tool on every page says _needs an answer_ under **Maintainer**, because nobody has been
assigned. A tool with no named maintainer is a tool nobody is calibrating, restocking or
fixing — so this is the most important blank on the wiki. See
[Who to contact](../the-space/who-to-contact.md).
:::

## The register

**Induction** means the machine is locked until you are signed off — your card will not start
it. See the [induction matrix](../safety/induction-matrix.md) for what each involves.

### Electronics bench — floor 02 · confirmed

Twenty-two items. [Full list and the bench rules →](./electronics/index.md)

| Group | Items | Induction |
| --- | --- | --- |
| Soldering | [Main station](./electronics/main-soldering-station.md), [cordless pen iron](./electronics/cordless-pen-iron.md) | No |
| Hot air & fumes | [Hot air gun](./electronics/hot-air-gun.md), [fume snorkel](./electronics/fume-snorkel.md) | No |
| Inspection | [Microscope camera](./electronics/microscope-camera.md), [screen](./electronics/microscope-screen.md), [keyboard](./electronics/bench-keyboard.md) | No |
| Measurement | [Scope](./electronics/oscilloscope.md), [probes](./electronics/scope-probes.md), [logic analyser](./electronics/logic-analyser.md), [bench meters](./electronics/bench-meter.md) | No |
| Power | [Bench PSU A & B](./electronics/bench-psu.md) | No |
| Hand tools & storage | [Nine items](./electronics/index.md#hand-tools-workholding-and-storage) — drivers, hex keys, cutters, helping hands, ESD mat, solder rail, document holder, safety glasses | No |
| Compute | [Compute rack](./electronics/compute-rack.md) — 4 NUCs, 2 switches | No |

Nothing on the electronics bench needs a formal induction. It has [bench rules](./electronics/index.md#bench-rules)
instead, and they are not optional.

### Workshop — floor 01 · unconfirmed

| Tool | Qty | Induction | Status |
| --- | --- | --- | --- |
| [Bambu Lab X1C 3D printer](./workshop/3d-printer-bambu-x1c.md) | ×4 | Short | Unconfirmed |
| [60 W CO₂ laser cutter](./workshop/laser-cutter-co2.md) | ×1 | **Required** | Unconfirmed |
| [Desktop CNC mill](./workshop/cnc-mill.md) | ×1 | **Required** | Unconfirmed |
| [Spray booth](./workshop/spray-booth.md) | ×1 | **Required** | Unconfirmed |

### RF bench — floor 02 · unconfirmed

| Tool | Qty | Induction | Status |
| --- | --- | --- | --- |
| [HackRF One](./rf/hackrf-one.md) | ×3 | Undecided | Unconfirmed |
| [TinySA Ultra](./rf/tinysa-ultra.md) | ×3 | No | Unconfirmed |
| [RF-shielded test cage](./rf/rf-shielded-cage.md) | ×1 | No | Unconfirmed |

Anything that transmits is governed by [Responsible use](../flipper/responsible-use.md),
induction or not.

### Also promised, not inventoried

- [Reflow oven & stencil jig](./electronics/reflow-oven.md) — on the kit list, not on the bench.

### Not on the register

- **Hand tools** on each floor — racked, no induction, and they never leave the building.
- **The e-waste bin** (floor 00) — free to raid, free to feed.

## When a tool is broken

1. **Stop using it.** Don't finish your job first.
2. **Tag it.** Red tags are at each bench. Write what happened and the date.
3. **Post in the hackspace channel**, and tell the maintainer named on its page.
4. **Don't repair it yourself** unless you are its maintainer. Logging the fault is the helpful
   act; an undocumented fix on a shared machine is not.

Nobody is in trouble for breaking a tool. The problem is a broken tool that the next member
discovers at 3am.

## Adding a tool page

Copy the **[tool page template](./tool-page-template.md)** into the right folder. The sidebar is
generated from the folder tree, so a new file appears on its own — then add its row above.
