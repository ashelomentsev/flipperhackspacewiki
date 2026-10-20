---
title: Getting started
sidebar_position: 3
description: First-hour setup — qFlipper, the SD card, updating, and the subsystems worth knowing about.
---

# Getting started

Assumes a Flipper Zero out of the box. Half an hour to a device that is updated, has a working
SD card, and that you can get files on and off.

Read [Responsible use](./responsible-use.md) first. It is shorter than this page.

## The first half hour

1. **Charge it.** USB-C. It ships part-charged and a low battery makes the first firmware update
   fail in a confusing way.
2. **Install [qFlipper](https://flipperzero.one/update)** on your laptop — the desktop tool for
   updating, file transfer and recovery. There is also a mobile app over Bluetooth, which is
   nicer for day-to-day and worse for recovery.
3. **Update the firmware.** qFlipper offers the current release; take it. See
   [Firmware](./firmware.md) before you consider anything else.
4. **Check the SD card.** The device wants a FAT32 microSD. The supplied card works; if you swap
   it, format FAT32 and let the Flipper build its folder structure rather than copying one over.
5. **Set the clock.** Needed for timestamps on captures to mean anything.
6. **Learn the three buttons:** OK opens, Back exits and long-Back goes home, the arrows move.
   Long-press OK in an app usually means "do the thing".

## Where things are on the device

| | |
| --- | --- |
| **Sub-GHz** | 300–928 MHz receive and transmit, with a regional TX restriction on official firmware |
| **125 kHz RFID** | The old proximity cards — read, save, emulate |
| **NFC** | 13.56 MHz — MIFARE, NTAG, bank-card reading of the public data |
| **Infrared** | Learn and replay remotes, plus a universal remote database |
| **iButton** | 1-Wire contact keys, the round ones on intercoms |
| **GPIO** | 18 pins — SPI, I²C, UART, 3.3 V logic. The most useful subsystem at a hackspace |
| **BadUSB** | Acts as a USB keyboard and types a script |
| **U2F** | A hardware second factor. Genuinely useful, unglamorous |

Each has a page under [Guides](./guides/index.md).

## The SD card

Everything you save lives here, in folders per subsystem. Worth knowing:

- **Back it up.** Drag the whole card to your laptop occasionally. People lose years of captures
  to a card failure, and the cards are cheap and not reliable.
- **Keep your own captures organised.** The default is one flat pile per subsystem and it becomes
  unusable fast. Name files after what they are and when, not `subghz_1`.
- **Don't fill it with downloaded databases** you have not read. Half of what circulates is other
  people's captures of other people's systems, which is exactly what
  [Responsible use](./responsible-use.md) is about.

## What to do with it first, here

The genuinely useful starting point at a hackspace is not the radio, it is the **GPIO**:

- Drive an I²C sensor on your own board and read it back.
- Use it as a UART bridge to a board with no USB.
- Power a 3.3 V circuit from it, briefly, when you are away from the
  [bench PSU](../tools/electronics/bench-psu.md).

That teaches you the device and your own hardware at the same time, with nothing to think about
policy-wise.

Then: read your own car fob on sub-GHz, read your own travel card on NFC, learn your own TV
remote on infrared. Your own things, on a bench, with nothing transmitting anywhere.

## Getting help

- **The [guides](./guides/index.md)** in this section.
- **The official documentation** at [docs.flipper.net](https://docs.flipper.net).
- **The members' Telegram** — the fastest route for "why is mine doing this".
- **Floor 03.** The people who wrote the firmware. See [Flipper](./index.md) for how to use that
  well.
