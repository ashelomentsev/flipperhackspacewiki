---
title: GPIO & modules
sidebar_position: 40
description: Eighteen pins, SPI, I²C and UART at 3.3 V. The most useful subsystem at a hackspace, and the one with no policy attached.
---

# GPIO & modules

Eighteen pins on the top: **SPI, I²C, UART, PWM, ADC, 1-Wire**, 3.3 V logic, plus 3.3 V and 5 V
out.

**This is the subsystem to learn first.** It has the most use at a bench, it works on hardware
you own, and there is no policy page attached to it — see
[Getting started](../getting-started.md).

## What is worth doing here

- **Talk to your own sensors.** I²C scanner, read a BME280 or an MPU6050, confirm your board's
  bus is wired right before you blame your firmware.
- **UART bridge** into a board with no USB. Far quicker than finding an adapter, and it is in
  your pocket.
- **Serial console** for a router, a dev board or anything with 3.3 V TX/RX on a header.
- **Stand in for a logic probe** when you are away from the
  [logic analyser](../../tools/electronics/logic-analyser.md) — not as good, always with you.
- **Bring-up checks on your own board.** Is the rail there, is the crystal running, does the bus
  acknowledge. The questions that occupy the first evening with new hardware.
- **Drive a small load through a transistor**, learning the limits properly.

## The electrical limits, which matter

:::warning[3.3 V logic, and the pins are not protected]
- **Pins are 3.3 V.** **5 V logic on an input will damage it.** There is no tolerance claimed
  and no clamping worth relying on. Level-shift, or use a divider for receive-only.
- **Current per pin is small** — single-digit milliamps for comfort. An LED through a resistor is
  fine; a motor, a relay coil or a servo is not. Use a transistor and an external supply.
- **The 5 V pin is from USB or the boost converter**, and it is not a bench supply. For anything
  that draws real current use the [bench PSU](../../tools/electronics/bench-psu.md).
- **Ground first, always.** Common ground before signals, every time, same as the
  [logic analyser](../../tools/electronics/logic-analyser.md).
- **Nothing mains-referenced.** Same rule as the whole
  [electronics bench](../../tools/electronics/index.md#bench-rules).
:::

## Known traps

- **Pin numbering is not GPIO numbering.** The silkscreen labels and the names in the firmware
  and in app documentation do not all agree. Check the official pinout each time rather than
  trusting memory.
- **No pull-ups on the I²C pins by default.** A bus that scans empty is usually missing its
  pull-ups, not missing its device.
- **UART baud mismatch looks like a dead device.** Try the obvious rates before concluding
  anything.
- **A module that needs 5 V logic will not work**, however convincing its pinout looks.

## Modules

:::info[Needs a real answer]
Which expansion modules the space keeps and where — the official WiFi dev board, Video Game
Module, prototyping boards, or none. A shared pool of a few would be genuinely useful and is the
sort of thing members will otherwise each buy separately.
:::

## Links

- [Electronics bench](../../tools/electronics/index.md) — the instruments that do this properly
- [Logic Analyser](../../tools/electronics/logic-analyser.md)
- [Official GPIO documentation and pinout](https://docs.flipper.net)
