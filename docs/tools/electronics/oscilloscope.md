---
title: Oscilloscope
sidebar_position: 40
description: Four-channel touchscreen scope with serial decode. Shows how a voltage changes over time.
---

# Oscilloscope

| | |
| --- | --- |
| **Make / model** | Rigol MSO5074 — 4 channel, 70 MHz, 8 GSa/s |
| **Location** | 02 — electronics lab, main bench |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | _needs an answer_ |
| **Manual** | _needs an answer — Rigol MSO5000 series_ |

A 4-channel, 70 MHz, 8 GSa/s touchscreen scope. It shows how a voltage changes over
time, and can decode serial buses with the **Decode** button. The wide **LA** socket takes
Rigol's 16-channel digital probe, if fitted.

Rule of thumb: **the scope answers "what does this edge look like", the
[Logic Analyser](./logic-analyser.md) answers "what did it say".**

## How to use

1. Press the power button (bottom-left). Boot takes about 30 seconds.
2. Plug a probe into **CH1** (yellow). Set the probe switch to **10×**, and **check CH1's menu
   shows probe 10× too.**
3. Clip the probe's ground lead to your circuit's ground (0 V), then touch the tip to the
   signal.
4. Press **AUTO**. The scope finds a sensible view.
5. Adjust with the knobs: **Vertical Scale** (volts per square), **Horizontal Scale** (time per
   square), **Trigger Level** (steadies the trace).
6. **STOP/RUN** freezes the picture; **SINGLE** captures one event; **Measure** adds readouts
   like frequency and peak-to-peak.
7. Save screenshots to a USB stick in the front port (**Storage**).
8. **Press Default before you leave**, so the next person starts clean.

## Don't

:::danger[The ground lead is tied to mains earth]
**Don't clip the ground lead to anything that is not at 0 V.** The probe ground is connected to
mains earth through the scope, so clipping it to a live or floating point shorts that point to
earth through the chassis.

This is also why **no mains-powered circuits at this bench** is
[bench rule 5](./index.md#bench-rules). Mains-referenced work needs a differential probe and
someone who has done it before — see [Lone working](../../safety/lone-working.md).
:::

## Known quirks

- **Probe attenuation mismatch is the most common wrong reading in the lab.** A 10× probe on a
  channel set to 1× reads ten times low. The switch on the probe and the setting in the menu
  are two separate things and both have to say 10×.
- **AUTO fights you on slow signals.** Below a few hertz it picks a timebase that shows nothing
  and claims it triggered. Set the timebase by hand.
- **A long ground lead turns every fast edge into ringing** you will then try to debug. Keep it
  short, to a ground close to the signal.
- **USB sticks must be FAT32.** exFAT and NTFS are not read, with an unhelpful error.

## Consumables

[Scope Probes](./scope-probes.md) and their tips, hooks and ground clips. A
probe with a broken tip gets reported, not re-hung.

## If it breaks

Safe to try: **Default**, then a power cycle. That fixes most of what looks broken.

Stop there. Firmware, self-calibration and anything involving the case are the maintainer's.

## Links

- [Scope Probes](./scope-probes.md)
- [Logic Analyser](./logic-analyser.md) — for reading bus traffic rather than edges
- [Bench Meter](./bench-meter.md)
