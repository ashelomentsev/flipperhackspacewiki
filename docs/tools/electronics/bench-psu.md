---
title: Bench PSU A & B
sidebar_position: 50
description: Two programmable supplies with current limiting. Set the limit before you connect anything.
---

# Bench PSU A & B

| | |
| --- | --- |
| **Make / model** | NANKADF programmable DC power supplies |
| **Location** | 02 — electronics lab, main bench — two of them, A and B |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | _needs an answer_ |
| **Manual** | _needs an answer_ |

Adjustable DC supplies with a **current limit**, so a wiring mistake trips the supply
instead of frying your board. Each also has USB-A and USB-C charging ports.

:::info[Needs a real answer]
**Check the label on top for its maximum volts and amps** — the ratings are not recorded here
yet. Someone should read them off both units and fill this in. It also matters whether the two
channels are isolated, which decides whether A and B can safely be put in series.
:::

The current limit is the feature. Everything else is a knob.

## How to use

1. Press the power button. Make sure the **OUT** light is **off** — output disabled.
2. Press **V/A** to choose voltage or current, then turn the knob to set it. Set the voltage
   your circuit needs, and **a current limit just above what it should draw** — e.g. 0.2 A for
   a small microcontroller board, not the maximum.
3. Hold **OCP** (or the current setting, per the manual) to turn over-current protection on:
   the supply cuts out and beeps on a short.
4. Connect the leads: **red = +, black = −**. The **green** terminal is earth; leave it unused
   unless you know you need it.
5. Press **OUT** to switch power on. **Watch the amps reading** — a jump to the limit means
   something is wrong. Press **OUT** again.
6. When finished: **OUT** off, then disconnect, then power off.

**Tip:** the two supplies can power two separate rails, e.g. 5 V and 3.3 V.

## Don't

- **Don't set the limit from the supply's maximum.** Set it from what the circuit should draw.
  5 A into a wrong pin is smoke; 150 mA into a wrong pin is often survivable.
- **Don't connect or disconnect with the output on.** Hot-plugging puts an inrush spike through
  everything downstream.
- **Don't raise the limit to make it stop tripping.** If it trips the moment you enable the
  output, something is backwards or shorted.

## Known quirks

- **The current limit is not a fuse.** It is a fast regulator: it will hold your set current
  into a dead short all day, and that current still kills parts.
- **Long thin leads drop real volts at amps.** At 3 A, a metre of thin lead can cost several
  hundred millivolts. Measure at the board with a [Bench Meter](./bench-meter.md), not on the
  supply's display.
- **The display is an indication, not an instrument.** If the number matters, measure it.

## Consumables

Banana leads, croc clips and terminals in the bench drawer. A lead with cracked
insulation or a loose banana shell gets binned, not re-hung.

## If it breaks

Safe to try: check the leads first — a dead supply is usually a dead lead. Power
cycle.

A supply that smells hot, buzzes under light load, won't hold a set voltage, or has a damaged
mains cord gets unplugged and tagged.

## Links

- [Bench Meter 1 & 2](./bench-meter.md)
- [Oscilloscope](./oscilloscope.md) — for what the rail actually looks like
