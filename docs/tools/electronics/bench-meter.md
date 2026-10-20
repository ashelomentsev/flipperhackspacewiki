---
title: Bench Meter 1 & 2
sidebar_position: 43
description: Two 55,000-count bench multimeters. Move the red lead back to VΩ when you are done.
---

# Bench Meter 1 & 2

| | |
| --- | --- |
| **Make / model** | OWON XDM1241, 55,000 counts |
| **Location** | 02 — electronics lab, main bench — two of them |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | _needs an answer_ |
| **Manual** | _needs an answer_ |

A 55,000-count bench multimeter: very precise readings on a big screen. There are two,
so you can watch a voltage and a current at the same time.

## Lead positions

| To measure | Press | Red lead in | Black lead in |
| --- | --- | --- | --- |
| DC/AC voltage | **V** | Top red (VΩ) | COM |
| Resistance, continuity, diode | **Ω** (beep icon) | Top red (VΩ) | COM |
| Capacitance | **⊣⊢** | Top red (VΩ) | COM |
| Small current, up to ~600 mA | **A** | Middle red (mA) | COM |
| Large current, up to 10 A | **A** | Bottom red (10A) | COM |

- **Range** for manual range, **Dual** for two readings at once, **Freq** for frequency,
  **Temp** with a thermocouple.
- **To measure current, break the circuit and put the meter in series.** A meter in current
  mode is nearly a short circuit — across a supply it blows the fuse instantly.

## Don't

:::warning[Put the red lead back in VΩ before you walk away]
Measuring voltage with the red lead still in a **current** socket puts a near-short across
whatever you are probing, and blows the fuse. It is the single most common way these meters go
out of service, and the next person inherits it.

Last thing you do: red lead back to the top **VΩ** socket.
:::

## Known quirks

- **A current reading needs the circuit broken.** If you find yourself clipping a meter across
  two points to read amps, stop — that is the fuse-blowing mistake.
- **55,000 counts is not 55,000 counts of accuracy.** Resolution and accuracy are different
  things; the last digit or two is resolution, not truth.

## Consumables

Spare fuses — _needs an answer: which rating, and where they are kept._ A meter
with a blown current fuse is effectively out of service until someone knows this.

## If it breaks

Safe to try: check the lead positions and the function button first — most faults are
one of those. Then check the fuse if you know how.

Tag it if it reads obviously wrong against the other meter.

## Links

- [Bench PSU A & B](./bench-psu.md)
- [Oscilloscope](./oscilloscope.md)
