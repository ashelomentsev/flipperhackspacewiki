---
title: Scope Probes
sidebar_position: 41
description: Passive probes for the scope. Use 10× for almost everything.
---

# Scope Probes

| | |
| --- | --- |
| **Make / model** | Rigol PVP2350 passive probes, 350 MHz |
| **Location** | 02 — electronics lab, main bench |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | _needs an answer_ |
| **Manual** | _needs an answer_ |

Passive probes: **350 MHz at 10×**, much less at 1×. **Use 10× for almost
everything** — 1× costs you most of the bandwidth and loads the circuit harder.

## Compensating a probe

If square waves look rounded or spiky, adjust the small screw on the probe body while viewing
the scope's calibration signal. Turn it until the corners are square — neither overshooting nor
sagging.

Worth doing whenever edges matter, and it takes under a minute.

## Don't

- **Don't kink the cable.** Store them coiled loosely in their bag.
- **Don't leave a probe switched to 1×** for the next person without telling them. See the
  attenuation quirk on the [Oscilloscope](./oscilloscope.md) page.
- **Don't clip the ground lead to anything not at 0 V** — see the danger note on the
  [Oscilloscope](./oscilloscope.md) page. It applies to the probe, not the scope.

## Consumables

Spare tips, hooks and ground clips in the bench drawer.

## If it breaks

A probe with an intermittent reading is usually a broken ground lead or a cracked
tip. Report it and take another rather than fighting it — a bad probe wastes hours of
debugging on a circuit that is fine.

## Links

- [Oscilloscope](./oscilloscope.md)
