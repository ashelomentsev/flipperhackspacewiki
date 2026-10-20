---
title: TinySA Ultra
sidebar_position: 20
description: Pocket spectrum analyser, 100 kHz – 5.3 GHz. Fit the attenuator before you connect anything.
---

# TinySA Ultra

| | |
| --- | --- |
| **Make / model** | TinySA Ultra |
| **Location** | 02 — RF bench |
| **Quantity** | ×3 _(unconfirmed)_ |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | **Unconfirmed** — not on the 15 Oct 2026 inventory |
| **Manual** | [tinysa.org/wiki](https://tinysa.org/wiki/) |

A pocket spectrum analyser covering roughly **100 kHz to 5.3 GHz**. It answers the question the
[HackRF](./hackrf-one.md) cannot: *what is actually on the air, and how strong is it?*

It is the right instrument for checking that your transmitter is on the frequency you think,
that it is not splattering across the neighbours, and that the thing you are chasing is real.

:::danger[The input damages easily]
The maximum safe input is low — around **+10 dBm**, and far lower if DC is present. A transmit
output connected directly to the input destroys the first mixer, and it is not a repair.

**Fit an external attenuator before you connect anything you are driving**, and never connect
it to a port that might carry DC bias or an antenna on a tower. Confirm the exact limit against
the manual for the unit in front of you before relying on this paragraph.
:::

## How to use

1. **Attenuator on the input.** Decide the value from what you are measuring, not from what you
   hope it is.
2. Set the **start and stop frequency** to the span you care about — not the full range, which
   is slow and hides detail.
3. Set **RBW** to auto first. Narrow it when you need to resolve two close signals; narrow RBW
   is slower but quieter.
4. Check which **mode** you are in — the low and high frequency paths behave differently, and a
   reading in the wrong mode is meaningless.
5. **Self-calibrate** against the internal reference if the absolute number matters.

## Known quirks

_General to the instrument, not checked against a unit here:_

- **It is not a lab analyser, and its absolute accuracy is modest.** Excellent for relative
  measurements, comparisons and "is it there"; treat absolute dBm as approximate.
- **Harmonics and images of a strong signal look like real signals.** If something appears at
  exactly 2× or 3× your transmitter, suspect the instrument before the transmitter. Add
  attenuation — if the spurious peak drops faster than the real one, it was internal.
- **The low/high band switchover** causes a visible step in the noise floor. Normal.
- **Firmware versions change the menus.** Check which version a unit runs before following a
  tutorial.
- **The screen is small and the touch targets are smaller.** Fine on the bench, frustrating in
  a hurry.

## If it breaks

Safe to try: recharge it, reseat the antenna, firmware check per the wiki.

An input that reads nothing, or reads a flat line where a known signal should be, has probably
had too much power into it. Report it rather than passing it on — a dead-input analyser that
looks alive wastes somebody's evening.

## Links

- [TinySA wiki](https://tinysa.org/wiki/)
- [HackRF One](./hackrf-one.md)
- [Responsible use](../../flipper/responsible-use.md)
