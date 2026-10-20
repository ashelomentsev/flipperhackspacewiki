---
title: Logic Analyser
sidebar_position: 42
description: Captures up to sixteen digital lines and decodes I²C, SPI and UART on a computer.
---

# Logic Analyser

| | |
| --- | --- |
| **Make / model** | Saleae Logic Pro 16 — 16 channel, USB-C |
| **Location** | 02 — electronics lab, main bench |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | _needs an answer_ |
| **Manual** | [support.saleae.com](https://support.saleae.com) |

:::info[Model needs confirming]
Identified from its logo and port labels. **Check the model on its underside** and correct this
page — a Logic Pro 16 and a Logic 8 differ in channel count, sample rate and analogue
capability, so the difference matters.
:::

Records up to 16 digital lines at once and decodes protocols such as I²C, SPI and UART on a
computer. The reason to reach for it over the [Oscilloscope](./oscilloscope.md) is the
decoders: it reads your bus traffic back as bytes and tells you where the NAK was.

## How to use

1. Install the free **Logic 2** software from [saleae.com](https://www.saleae.com/downloads/) on
   your laptop, or use a NUC on the [Compute Rack](./compute-rack.md). It is a few hundred
   megabytes — do it before you sit down.
2. Connect by **USB-C**. **Connect a ground wire first**, then the signal wires. Test clips are
   in the yellow bin.
3. In Logic 2, pick the channels, **set the voltage level to match your circuit** (e.g. 3.3 V),
   press **Start**.
4. Add an analyser — I²C, SPI, UART — to turn the waveforms into readable data.

## Don't

- **Don't connect inputs to anything above ±25 V.** This is the most common way one of these
  dies. Automotive signals and CAN at 12 V differential need a transceiver in front of them.
- **Don't skip the ground wire.** Without it the captures are nonsense in an interesting way.

## Known quirks

- **Thresholds are not auto-detected.** Probing 1.8 V logic with the input set for 3.3 V gives
  a trace that looks like a dead bus. Set the level first.
- **Sample rate and depth are shared across active channels.** Turn off the channels you aren't
  using before complaining about the rate.
- **The leads are the weak point.** Grabbers break and the ribbon pulls out of the housing.
  Pull on the housing, never the wire.
- **Save your captures to your own storage.** Don't leave `.sal` files on a shared NUC for
  someone else to clear up.

## Consumables

Grabbers, flywires and test clips — yellow bin. A broken grabber goes in the
bin and in the hackspace channel, not back in the pouch.

## If it breaks

Safe to try: another cable, another port, restart Logic 2, re-seat the leads.

A channel that reads stuck, or a device that won't enumerate on a known-good port, gets
tagged.

## Links

- [Logic 2 downloads](https://www.saleae.com/downloads/)
- [Oscilloscope](./oscilloscope.md)
- [Compute Rack](./compute-rack.md)
