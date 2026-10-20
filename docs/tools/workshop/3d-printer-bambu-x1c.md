---
title: Bambu Lab X1C 3D printer
sidebar_position: 10
description: Four enclosed FDM printers. Short induction, mostly about not wrecking a nozzle.
---

# Bambu Lab X1C 3D printer

| | |
| --- | --- |
| **Location** | 01 — workshop, printer bay |
| **Quantity** | ×4 |
| **Maintainer** | _needs an answer_ |
| **Induction** | Short |
| **Status** | **Unconfirmed** — no workshop inventory yet, see [Workshop](./index.md) |
| **Manual** | [wiki.bambulab.com](https://wiki.bambulab.com) |

Enclosed, heated-chamber FDM printers, fast, with AMS units for multi-material and automatic
filament changes. The enclosure means ABS and ASA actually work rather than curling off the
plate.

## Induction

Short — about fifteen minutes, and it is not a safety induction so much as a
don't-cost-the-space-a-nozzle induction. Covers: plate choice, the AMS, which filaments need
a hardened nozzle, and how to abort a print that is going wrong.

:::info[Needs a real answer]
Who gives it, and whether print time is metered, queued or booked. With four printers and a
full membership this needs a rule before it needs arbitration.
:::

## Before you start

1. **Clean the plate with IPA.** Not washing-up liquid, not your fingers. Finger grease is
   the number one cause of a first layer letting go.
2. **Pick the right plate for the material.** Textured PEI for most things; the engineering
   plate needs glue stick for some materials and will leave marks without it.
3. **Check what is loaded in the AMS** and that it matches your slice. The printer trusts the
   spool tag, and a hand-wound spool on a reused tag will lie to it.
4. **Hardened nozzle for anything filled.** Carbon-fibre and glass-filled filament eats a
   brass nozzle in a couple of hundred grams. Check which machine has which nozzle before
   slicing.
5. **Door shut for ABS/ASA, door open for PLA.** PLA in a hot closed chamber softens in the
   heat break and jams.
6. **Watch the first layer.** Not from your bench — stand there. Ninety percent of failures
   are visible in the first two minutes.

## Known quirks

- **The lidar first-layer scan is fooled by a dirty plate** and will pass a layer that is
  not stuck. It is a help, not a guarantee.
- **PLA and PETG in the same AMS cause failed purges.** They need different purge volumes
  and the defaults are optimistic. Expect colour bleed for the first few grams after a change.
- **Wet filament is most of what looks like a hardware fault** — popping, stringing, rough
  surfaces, under-extrusion. Nylon and PETG pick up moisture in days in a London workshop.
  Dry it before blaming the machine.
- **Never pull filament out cold.** Heat the nozzle, retract through the menu. Yanking cold
  filament leaves a plug in the extruder gears and that is a strip-down.
- **A failed print welded to the plate comes off cold**, with the plate removed and flexed —
  not with a chisel on the bed while it is hot. Gouge the PEI and the plate is finished.
- **Spaghetti detection does not catch everything.** A print that has come loose and is being
  dragged around can carry on for hours.
- **Do not print PVC, PTFE or anything chlorinated**, ever — the same rule as the
  [laser cutter](./laser-cutter-co2.md), for the same reason.

## Consumables

| | Where | Who pays |
| --- | --- | --- |
| PLA, PETG, basic colours | Workshop filament shelf | The space |
| ABS, ASA, filled and exotic filament | Bring your own | You |
| Nozzles | Workshop drawer | The space — flag when you fit one |
| IPA, blue roll | Workshop shelf | The space |
| Glue stick | Workshop drawer | The space |

Label your spools. Unlabelled filament on the shelf becomes space filament.

## If it breaks

Safe to try: cancel the print, cold-pull per the manual's procedure, re-level, clean the
plate, swap a nozzle if you have done it before.

Stop at: anything inside the electronics bay, a loose belt, a damaged heat-break, a bed that
will not home.

## Links

- [Bambu Lab wiki](https://wiki.bambulab.com)
- [Laser cutter](./laser-cutter-co2.md) — for the material rules that apply to both
