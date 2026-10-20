---
title: RF-shielded test cage
sidebar_position: 30
description: Where transmitting happens. The only place in the building you may key up freely.
---

# RF-shielded test cage

| | |
| --- | --- |
| **Make / model** | _needs an answer_ |
| **Location** | 02 — electronics lab |
| **Quantity** | ×1 _(unconfirmed)_ |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | **Unconfirmed** — not on the 15 Oct 2026 inventory |
| **Manual** | _needs an answer_ |

A screened enclosure with filtered feedthroughs. Its job is to let you transmit, receive, replay
and fuzz a radio link **without any of it leaving the building**.

This is what makes legitimate RF work possible here. Almost everything interesting involves
transmitting, almost all transmitting over the air is restricted, and the cage is the answer to
both at once.

:::info[Needs a real answer — and it is a number, not a sentence]
**The cage's measured attenuation**, in dB, across the bands people will use.

This is not a detail. "Shielded" is not a property, it is a figure: a cage giving 80 dB is a
serious containment, one giving 20 dB with a cable run badly through the door is a decorative
box. Members are entitled to know which one they are relying on before they key up inside it.

Someone should measure it with a [TinySA](./tinysa-ultra.md) and a known source, and write the
number here with the date.
:::

## How to use it

1. **Device inside, instruments outside**, connected through the filtered feedthroughs.
2. **Never run an unfiltered cable through the door seal.** A cable through a gap is an antenna,
   and it carries your signal straight out of the cage. This defeats the entire thing, and it
   is the most common way a shielded enclosure stops working.
3. **Door properly latched**, all the way round. The seal is the weakest part of any cage.
4. **Nothing live or hot left inside** unattended.
5. **Check what else is in there** before you close the door — a forgotten phone inside a cage
   is both confusing and a flat battery.

## What it does not do

- **It is not a Faraday cage for safety.** It contains RF; it does not make high power safe, and
  it does not protect you from what is inside it.
- **It does not make an illegal transmission legal if it leaks.** The duty is on you to not
  radiate. The cage is how you discharge that duty, not a permission slip.
- **It is not calibrated for measurement.** Reflections inside a metal box make absolute
  measurements meaningless. For a real figure you need an anechoic chamber, which the space does
  not have.

## Known quirks

_To be filled in from the real unit._ The things worth recording when it exists: which
feedthroughs are fitted and what they filter, whether the door seal has a known weak corner,
what the measured attenuation is and when it was last checked.

## If it breaks

A damaged seal, a bent door frame or a missing feedthrough blank means the cage is not
containing anything. Tag it and tell the maintainer — a cage people trust and that does not work
is worse than no cage.

## Links

- [HackRF One](./hackrf-one.md)
- [TinySA Ultra](./tinysa-ultra.md)
- [Responsible use](../../flipper/responsible-use.md)
