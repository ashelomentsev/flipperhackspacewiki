---
title: HackRF One
sidebar_position: 10
description: Wideband SDR, 1 MHz – 6 GHz, half duplex. Transmit only into the cage.
---

# HackRF One

| | |
| --- | --- |
| **Make / model** | Great Scott Gadgets HackRF One |
| **Location** | 02 — RF bench |
| **Quantity** | ×3 _(unconfirmed)_ |
| **Maintainer** | _needs an answer_ |
| **Induction** | _needs a decision — see [RF bench](./index.md)_ |
| **Status** | **Unconfirmed** — not on the 15 Oct 2026 inventory |
| **Manual** | [hackrf.readthedocs.io](https://hackrf.readthedocs.io) |

A software-defined radio covering **1 MHz to 6 GHz**, up to 20 MS/s, 8-bit, **half duplex** —
it transmits or receives, never both at once. Open hardware, and the standard tool for looking
at a signal nobody has written a receiver for.

:::danger[Transmit into the cage]
The HackRF transmits. A few milliwatts into a decent antenna reaches a long way, and the device
has **no transmit filtering** — its output is full of harmonics and mixer images that land on
bands you did not intend to use.

Transmitting over the air on a band you are not licensed for is an offence under the Wireless
Telegraphy Act 2006. Transmit into the [shielded cage](./rf-shielded-cage.md), or into a dummy
load, or not at all. See **[Responsible use](../../flipper/responsible-use.md)** — it is the
binding document, and it is short.
:::

## What it is good for

- **Looking at an unknown signal** — capture to IQ, then analyse offline.
- **Decoding things nobody made a dongle for** — telemetry, pagers, odd industrial links.
- **Replaying a capture you made yourself, into a cage**, to prove you understood it.

## What it is bad for

- **Narrow-band sensitivity.** 8 bits of dynamic range with no front-end filtering means a
  strong nearby signal swamps everything. An RTL-SDR with a filter often beats it for listening
  to one thing.
- **Clean transmit.** See above. It is a laboratory source, not a transmitter.
- **Measuring power.** Use the [TinySA Ultra](./tinysa-ultra.md); the HackRF's gain stages are
  uncalibrated.

## Gain staging, which is where everyone goes wrong

Three separate gains, and turning them all up gives you noise, not signal:

1. **RF amp** (the 14 dB LNA) — off unless the signal is genuinely weak. On, it overloads.
2. **IF/VGA gain** — the main one to adjust.
3. **Baseband gain** — last resort, receive only.

Start with the RF amp off, IF around the middle, and come up until the noise floor just lifts.
If the spectrum shows evenly-spaced copies of your signal, you are overloading — turn gain
*down*, not up.

## Known quirks

_General to the hardware, not checked against a unit here:_

- **Half duplex.** It cannot listen while transmitting, which rules out a whole class of
  protocol work.
- **The DC spike in the middle of the band** is an artefact of the architecture, not a signal.
  Everyone rediscovers it.
- **Images and harmonics on transmit.** Without an external filter, assume output on multiples
  and mixes of your intended frequency.
- **It gets warm, and warm means frequency drift.** Let it settle before anything that depends
  on frequency accuracy, and consider an external clock reference for serious work.
- **USB cable quality matters** at 20 MS/s. Dropped samples look exactly like a signal that
  isn't there.
- **Antenna connector is SMA, and it is fragile.** Finger-tight plus a nudge. People snap them.

## If it breaks

Safe to try: another USB cable and port, `hackrf_info` to check it enumerates, reflash the
firmware per the documentation.

A unit that won't enumerate, has a damaged SMA connector, or shows a dead transmit path goes to
the maintainer.

## Links

- [HackRF documentation](https://hackrf.readthedocs.io)
- [Responsible use](../../flipper/responsible-use.md) — **read this before transmitting**
- [RF-shielded test cage](./rf-shielded-cage.md)
- [TinySA Ultra](./tinysa-ultra.md) — for measuring what you emitted
