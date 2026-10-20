---
title: Firmware
sidebar_position: 4
description: Official and third-party firmware, how to update and recover, and the space's position on unlocked builds.
---

# Firmware

## Official firmware

What qFlipper installs, and what the team on floor 03 writes. Recommended default for everyone,
and the only build the space can help you debug with any authority.

Update through [qFlipper](https://flipperzero.one/update) or the mobile app. Releases come with
notes; read them, because subsystem behaviour does change.

**Official firmware restricts transmit to the bands permitted in your region.** That restriction
is the device being a legal product, not a limitation to work around.

## Third-party firmware

Several community builds exist — Unleashed, RogueMaster, Momentum and others. They add features,
rearrange the UI, bundle app collections, and most of them **remove the regional transmit
restrictions**.

### The space's position

**Permitted on the premises. Not permitted as an excuse.**

- **Running it here is fine.** It is open hardware, and a space that forbade you from flashing
  your own device would be a strange hackspace.
- **Unlocking transmit does not unlock the law.** A transmission that was an offence under the
  **Wireless Telegraphy Act 2006** with official firmware is the same offence with custom
  firmware. The restriction was never what made it illegal.
- **"The firmware allowed it" is not a defence.** Nobody has made that argument successfully.
- **So: unlocked firmware belongs in the [shielded cage](../tools/rf/rf-shielded-cage.md).** If
  you have taken the restrictions off, you have taken on the job of deciding what is legal
  yourself — do that work before you key up, not after.

See [Responsible use](./responsible-use.md), which is binding either way.

### What you give up

Worth knowing before you flash:

- **Support.** The team debugs official firmware. On a custom build the first question will be
  "does it happen on official?", and that is a reasonable question.
- **Reproducibility.** A bug you report from a custom build with forty apps installed is hard
  for anyone to act on.
- **Warranty and update path**, depending on the build.
- **Trust in the binary.** You are running code from a community build chain on a device that
  reads your credentials. Some builds are well-run; "it has more features" is not evidence that
  one is.

## Updating

1. Charge above about half. A flat battery mid-update is the usual cause of a bricked-looking
   device.
2. qFlipper over USB-C, or the mobile app over Bluetooth. **USB for anything you care about** —
   a dropped Bluetooth update is a worse failure.
3. Let it finish. It reboots itself.
4. **Back up your SD card first** if you are changing between firmware families, as folder
   layouts differ.

## Recovery

A device that looks bricked usually is not.

- **qFlipper has a recovery mode** that reflashes over DFU. This is the first thing to try and it
  fixes most cases.
- **A blank screen is often a flat battery**, not a brick. Charge for an hour and look again.
- **Boot loops after a custom build** are usually resolved by reflashing official firmware and
  starting clean.
- **Ask in the Telegram before you take it apart.** Someone has had the same symptom. The
  hardware is repairable but opening it is rarely the answer.

:::info[Needs a real answer]
Whether the space keeps a known-good official build and a recovery laptop on the bench. It
would be a sensible thing for a space full of Flippers to have, and it costs nothing.
:::

## Links

- [qFlipper and official firmware](https://flipperzero.one/update)
- [Official documentation](https://docs.flipper.net)
- [Responsible use](./responsible-use.md)
