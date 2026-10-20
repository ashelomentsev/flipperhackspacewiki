---
title: Infrared
sidebar_position: 30
description: Learn and replay remotes. The low-stakes subsystem, with two places it stops being low-stakes.
---

# Infrared

Learns and replays IR remotes, and ships with a universal remote database for TVs, air
conditioning and projectors.

The friendliest subsystem on the device: line-of-sight only, short range, and the worst
realistic outcome in your own living room is a confused television.

## What is worth doing here

- **Learn your own remotes** and consolidate six into one device.
- **Reverse an IR protocol.** NEC, RC5, Sony SIRC and the rest are well documented and a good
  first protocol to decode by hand from a RAW capture.
- **Drive your own project over IR.** An IR receiver is fifty pence and the Flipper becomes your
  test transmitter.
- **Air conditioning**, which is the genuinely interesting one — most AC remotes send the entire
  state (temperature, mode, fan, timer) in one long frame rather than a keypress, so decoding
  one teaches you more than twenty TV remotes.

## Where it stops being low-stakes

- **The universal remote is a brute-force.** It walks a database of power codes. In your own
  room, fine. In a bar, a shop, a waiting room, a lecture theatre, a hospital — that is
  interfering with equipment you do not own, and the fact that it is "only a telly" is not the
  test. See [Responsible use](../responsible-use.md).
- **Projectors and displays in public spaces.** Same thing, more disruptive, and in a hospital or
  a transport setting it stops being funny immediately.
- **Not at events.** Including as a party trick. See the event rules in the policy.

Nobody is pretending IR is the serious risk on this device. The reason it is on the list is that
it is the one people do casually, and casual is how the culture of a space goes wrong.

## Known traps

- **Range is poor and angle matters.** A failed replay is usually aim, not protocol.
- **Some remotes send different codes for press and hold.** Learn both or the device half-works.
- **Fluorescent and LED lighting adds IR noise** and makes learning unreliable. Try in a dimmer
  spot before blaming the capture.
- **The database is large and not always right.** A code that nearly works is often the wrong
  variant of a near-identical model.

## Links

- [Responsible use](../responsible-use.md)
- [Official infrared documentation](https://docs.flipper.net)
