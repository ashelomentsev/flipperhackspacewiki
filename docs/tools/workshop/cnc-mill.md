---
title: Desktop CNC mill
sidebar_position: 30
description: Induction required. No gloves, no loose clothing, and workholding is the whole job.
---

# Desktop CNC mill

| | |
| --- | --- |
| **Location** | 01 — workshop |
| **Quantity** | ×1 |
| **Maintainer** | _needs an answer_ |
| **Induction** | **Required** |
| **Status** | **Unconfirmed** — no workshop inventory yet, see [Workshop](./index.md) |
| **Manual** | _needs an answer — model not recorded_ |

For aluminium, brass, plastics, wax and wood. Enclosure, spindle, three axes, and a program
that will happily drive a cutter into a clamp at full feed if you tell it to.

:::danger[Induction required]
A spinning cutter does not stop for you. The specific hazards are entanglement, ejected
workpieces and swarf in the eye — and the thing that actually hurts people is a part that
came loose, not a part that was cut badly.
:::

## Induction

**Required.** Covers: workholding, tool length setting and zeroing, feeds and speeds for the
materials the space stocks, chip clearing, running a program safely the first time, and the
emergency stop.

:::info[Needs a real answer]
Duration, who gives it, whether there is a test part, and which CAM post-processor the space
uses. That last one is not a safety matter but it is the thing that will waste a member's
first evening.
:::

## Before you start

1. **Eye protection on.** Before the enclosure is even open. Swarf goes everywhere and it is
   sharp and hot.
2. **No gloves. No loose sleeves. No rings. Long hair tied back. No lanyard, no tie.**
   Entanglement is the injury that takes a finger, and gloves make it far more likely, not
   less — they catch and pull your hand in.
3. **Work held properly** — clamps, vice or fixture, metal to metal. Not double-sided tape
   for anything in metal, not "it'll be fine", not held by hand ever.
4. **Know where your clamps are in the toolpath.** Simulate the program. The classic ruined
   evening is a finishing pass through a clamp.
5. **Tool length and work zero set and double-checked.** A Z-zero that is 10 mm out is a
   broken cutter at best.
6. **Air-cut the program above the work first**, at reduced rapid, watching. Then run it for
   real.
7. **Hand on the feed-hold** for the first pass of anything new.
8. **Know where the emergency stop is** — physically put your hand on it before you start.

## Known quirks

- **The sound tells you first.** A chattering, screeching cut means wrong feeds, speeds or
  depth of cut. Feed-hold and work out why. Pushing through chatter breaks cutters and work
  hardens aluminium so the next pass is worse.
- **Aluminium needs chip clearing or the cutter welds up.** Air or coolant, and clear between
  passes. A cutter with aluminium built up on the flutes stops cutting and starts rubbing.
- **Climb or conventional matters on a light machine.** The rigidity is not there to bully
  the cut; take shallower passes than a tutorial filmed on an industrial machine suggests.
- **Never clear chips with your hands, even stopped.** Brush, hook, vacuum. Swarf cuts like
  a razor.
- **Never clear chips with the spindle running.** Including with a brush.
- **A dull cutter costs more than a new cutter.** It pushes instead of cutting, loads the
  spindle, and ruins the surface. If it is not cutting cleanly, change it.
- **Plastics melt and re-weld behind the cutter.** Acrylic especially — single-flute cutter,
  high feed, and accept that the finish will need work.

:::warning[Two-person job out of hours]
Along with the laser and the spray booth. See [Lone working](../../safety/lone-working.md).
:::

## Consumables

| | Where | Who pays |
| --- | --- | --- |
| End mills, common sizes | Workshop tool drawer | The space — flag a broken one, always |
| Unusual cutters | Bring your own | You |
| Stock: aluminium, brass, acrylic | Bring your own | You |
| Wax, scrap for test cuts | Offcut rack | The space |
| Cutting fluid / coolant | With the machine | The space |

**A broken cutter gets reported, not hidden.** The next person needs to know that size is
gone, and the maintainer needs to know what the machine did.

## If it breaks

Safe to try: nothing beyond stopping the program and clearing chips with the spindle stopped
and the machine at a safe state.

Stop at: a spindle that sounds wrong, an axis that will not home or makes a grinding noise,
anything that has crashed, and any fault with the enclosure interlock.

Off, tagged, Telegram, maintainer. If it has crashed, say so — the machine may have lost
steps and need re-homing and checking before the next member runs a job on it.

## Links

- [Induction matrix](../../safety/induction-matrix.md)
- [PPE](../../safety/ppe.md)
- [Lone working](../../safety/lone-working.md)
