---
title: BadUSB
sidebar_position: 50
description: The Flipper acts as a USB keyboard and types a script. Your own machines only.
---

# BadUSB

Plugged in, the Flipper presents itself as a USB keyboard and types a script — Ducky Script, or
close to it. The computer cannot tell it from a person typing, because from the computer's point
of view there is no difference.

:::danger[Your own machines only]
A machine you own, or one you have **specific written permission** to test.

- **Not other members' laptops.** Not for a joke, not for a screen-lock prank. Both are
  unauthorised access under the Computer Misuse Act 1990, and "it was a joke" is not a defence
  the Act contains.
- **Not a shared [NUC](../../tools/electronics/compute-rack.md)** on the compute rack. Shared is
  not yours.
- **Not any machine in the building you did not bring.**
- **Not demonstrated at events.** See the event rules in
  [Responsible use](../responsible-use.md).

This is the subsystem where the gap between "obviously fine" and "criminal offence" is one
borrowed laptop wide.
:::

## What is worth doing here

The legitimate uses are duller than the reputation and genuinely useful:

- **Automating your own setup.** A script that configures a fresh machine the way you like it.
- **Typing long keys and configuration** into a device with no clipboard — a console, a BIOS
  screen, an embedded target.
- **Testing your own hardening.** If you are building something that should resist a keyboard
  injection, this is how you find out.
- **Driving your own board's bootloader** through a serial console menu.
- **Demonstrating the risk on your own machine**, to understand why an unattended unlocked
  screen matters.

## Known traps

- **Keyboard layout.** The script types scancodes; a US-layout script on a UK-layout machine
  produces the wrong characters, and this is most of what people debug.
- **Timing.** Scripts need delays for windows to open and focus to settle. A script that works
  on your fast laptop fails on a slow one.
- **It is not stealthy** and was never designed to be. A USB HID device appears in logs, and on
  a managed machine it may be blocked outright.
- **No feedback.** The device types and cannot see the screen, so a script that goes wrong keeps
  typing into whatever is in front of it. Test on a machine where that does not matter.

## Why this page is short on technique

Deliberately. The technique is well documented elsewhere, and the thing the space needs to
record is where the line is rather than how to write a better payload.

If you want to go deeper on your own machines, the official documentation and the Ducky Script
reference are the places. [Responsible use](../responsible-use.md) still applies, and it is the
page that will be quoted if this goes wrong.

## Links

- [Responsible use](../responsible-use.md) — **binding**
- [Official BadUSB documentation](https://docs.flipper.net)
