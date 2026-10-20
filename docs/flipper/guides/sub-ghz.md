---
title: Sub-GHz
sidebar_position: 10
description: 300–928 MHz receive and transmit. Receive freely; transmit into the cage.
---

# Sub-GHz

300–928 MHz. Where fobs, gates, doorbells, weather stations, TPMS sensors and a great deal of
cheap industrial telemetry live.

:::danger[The one rule]
**Receive freely. Transmit into the [cage](../../tools/rf/rf-shielded-cage.md), or not at all.**

Transmitting on a band you are not licensed for is an offence under the Wireless Telegraphy Act
2006. Replaying a capture where a real receiver can hear it is unauthorised access, whatever
happened to open. [Responsible use](../responsible-use.md) has the detail and it is binding.
:::

## Receiving

The useful mode, and the one with no policy problem.

- **Read** shows decoded signals from protocols the firmware knows.
- **Read RAW** records the waveform when it does not — this is where the interesting work is.
- **Frequency Analyzer** finds which frequency a nearby transmitter is actually on. Hold the fob
  close and press the button.

UK licence-exempt bands worth knowing: **433.05–434.79 MHz** and **868–868.6 MHz** are where
most consumer kit lives. 315 MHz gear exists but is mostly US-market.

## What is worth doing here

- **Read your own car fob** and watch the code change every press. Rolling codes are the
  interesting lesson: capture, replay, nothing happens, and now you understand why.
- **Your own weather station or sensors.** Static, unencrypted, and a genuinely good first
  protocol to reverse.
- **Your own gate or garage**, if you own it. Many are still fixed-code, which is the actual
  finding worth writing up.
- **Your own project's radio link.** Did your board transmit what you think, on the frequency
  you think, at the power you think? Confirm with the
  [TinySA](../../tools/rf/tinysa-ultra.md).

## Known traps

- **Rolling codes do not replay, by design.** If a replay works, the system is fixed-code and
  that is the finding. If it does not, that is also the finding. Either way the experiment is
  over — do not go looking for the rolling-code bypass on a system you do not own.
- **The device transmits at low power, which does not mean short range.** A few milliwatts at
  433 MHz reaches a long way with line of sight. "It's only a few metres" is wrong.
- **RAW captures are timing-sensitive.** A capture that will not replay often has a sample-rate
  or preset mismatch, not a protocol you failed to understand.
- **Your capture may contain somebody's personal data** — some telemetry is identifiable. Think
  before you post a capture publicly.
- **Never capture, and never replay, anything from aviation, marine, emergency services, rail
  or medical telemetry.** Not in the cage either.

## Links

- [Responsible use](../responsible-use.md) — **binding**
- [HackRF One](../../tools/rf/hackrf-one.md) — for wider captures and real analysis
- [TinySA Ultra](../../tools/rf/tinysa-ultra.md) — for measuring what is on the air
- [RF-shielded cage](../../tools/rf/rf-shielded-cage.md)
- [Official sub-GHz documentation](https://docs.flipper.net)
