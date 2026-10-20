---
title: RF bench
sidebar_position: 1
description: Planned RF kit — unconfirmed. Whatever lands here is governed by the responsible-use policy.
---

# RF bench

:::warning[Nothing here is confirmed yet]
The landing page's kit list promises **HackRF One + TinySA Ultra ×3** and an
**RF-shielded test cage ×1**. None of it appears on the electronics bench inventory of
15 October 2026.

The pages in this section describe what the hardware does in general — that part is reliable —
but **no serial number, setting, status or quirk here has been checked against a unit in this
building.** Whoever commissions the RF bench should rewrite them from the real kit.
:::

## The planned kit

| Tool | Qty | What it's for |
| --- | --- | --- |
| [HackRF One](./hackrf-one.md) | ×3 | Wideband software-defined radio, 1 MHz – 6 GHz, transmit and receive |
| [TinySA Ultra](./tinysa-ultra.md) | ×3 | Pocket spectrum analyser — what is actually on the air |
| [RF-shielded test cage](./rf-shielded-cage.md) | ×1 | Transmitting without transmitting into Greenwich |

## The thing that matters most about this bench

**Transmitting is regulated, and the regulation is not advisory.** Receiving is largely
unrestricted in the UK; transmitting on a band you are not licensed for is a criminal offence
under the Wireless Telegraphy Act 2006, and Ofcom does find sources.

Everything on this bench — induction or no induction — is governed by
**[Responsible use](../../flipper/responsible-use.md)**. Read it before you key up anything,
including a HackRF you think is only outputting a few milliwatts.

The short version: **receive freely, transmit into the cage, and if it has to be over the air,
ask first.**

## What this section needs

- Confirmation that the kit exists, and which units.
- A named maintainer. RF kit with no maintainer drifts out of calibration silently.
- The shielded cage's measured attenuation, so people know what it is good for.
- A rule on who may transmit over the air, and how that is logged.
- Whether any of this needs an induction. The argument for one is the policy, not the hazard.
