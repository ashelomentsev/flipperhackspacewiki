---
title: Electronics bench
sidebar_position: 1
description: The 22 pieces of kit on the main electronics bench, the bench rules, and a page for each.
---

# Electronics bench

Floor 02. Twenty-two pieces of kit, each with a short **wiki name** — the same name used on
the bench label and in this wiki's URLs, so a label and a page always match.

Source: the bench inventory of **15 October 2026**. Where a page says _needs an answer_, that
fact genuinely is not recorded yet.

## Bench rules {#bench-rules}

Read these before you sit down. The tool pages link back here, so these are the rules, not a
summary of them.

1. **Wear the [safety glasses](./safety-glasses.md)** when soldering, clipping leads or using
   hot air.
2. **Turn the [fume snorkel](./fume-snorkel.md) on before you heat anything.**
3. **Irons and the hot air gun always go back in their stands.** Never lay them on the bench.
4. **Clip an ESD wrist strap to the [mat's](./esd-mat.md) snap stud** before handling bare
   boards.
5. **Never work on mains-powered circuits at this bench.** The
   [scope](./oscilloscope.md) ground is tied to mains earth — see the danger note on that
   page for why this one is physics, not policy.
6. **Wash your hands after handling solder.**
7. **Before you leave:** everything off, tools back where they hang, bench clear.
8. **Something broken or running low?** Post it in the hackspace channel.

## At a glance

### Soldering

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| [Main Soldering Station](./main-soldering-station.md) | SUGON A9 (C210 handle, 120 W) | Everyday through-hole and SMD soldering |
| [Cordless Pen Iron](./cordless-pen-iron.md) | SUGON 55G wireless iron + dock | Fine-pitch work, quick touch-ups |

### Hot air and fumes

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| [Hot Air Gun](./hot-air-gun.md) | FNIRSI SAG-55 (550 W) | Removing/fitting SMD parts, heat-shrink |
| [Fume Snorkel](./fume-snorkel.md) | Through-desk extraction arm | Pulls solder smoke away from your face |

### Inspection

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| [Microscope Camera](./microscope-camera.md) | YIZHAN 4K HDMI, 0.7–4.5× zoom, ring light, boom stand | Magnified inspection of boards |
| [Microscope Screen](./microscope-screen.md) | Dell 4K monitor | Shows the microscope image |
| [Bench Keyboard](./bench-keyboard.md) | Logitech K400 Plus | Controls the device on the screen |

### Measurement

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| [Oscilloscope](./oscilloscope.md) | Rigol MSO5074 (4 ch, 70 MHz, 8 GSa/s) | Seeing signals over time |
| [Scope Probes](./scope-probes.md) | Rigol PVP2350 passive (350 MHz) | Connect the scope to your circuit |
| [Logic Analyser](./logic-analyser.md) | Saleae Logic Pro 16 (16 ch, USB-C) | Capturing and decoding digital buses |
| [Bench Meter 1 & 2](./bench-meter.md) | OWON XDM1241 (55,000 counts) | Volts, amps, resistance, continuity, more |

### Power

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| [Bench PSU A & B](./bench-psu.md) | NANKADF programmable DC supplies | Powering your project safely |

### Hand tools, workholding and storage

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| [Precision Screwdrivers](./precision-screwdrivers.md) | Wera Kraftform Micro set (pouch) | Tiny Torx, slotted, Phillips screws |
| [Screwdriver Rack](./screwdriver-rack.md) | Wera Kraftform on wall rack | Full-size screws |
| [Rainbow Hex Keys](./rainbow-hex-keys.md) | Wera 950/9 Hex-Plus Multicolour (metric) | Hex/Allen bolts |
| [Cutters & Pliers](./cutters-and-pliers.md) | Flush cutters, pliers on hooks | Trimming leads, gripping |
| [Helping Hands](./helping-hands.md) | Orange base, 4 gooseneck clip arms | Holding boards and wires |
| [ESD Mat](./esd-mat.md) | Grey anti-static mat with snap stud | Protecting sensitive parts |
| [Solder & Wire Rail](./solder-and-wire-rail.md) | bott reel rail: Weller solder + 6 wire colours | Solder and wire on tap |
| [Document Holder](./document-holder.md) | bott wall holder | Datasheets, schematics |
| [Safety Glasses](./safety-glasses.md) | Clear wrap-around glasses | Eye protection |

### Compute

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| [Compute Rack](./compute-rack.md) | Mini rack: patch panel, 2 PoE switches, Hackspace-NUC1–4 | Shared computers and network |

## Open questions on this bench

These are the blanks that stop a member using something, in rough order of how much they
cost:

| What | Why it matters |
| --- | --- |
| [Compute Rack](./compute-rack.md): OS, login, who to call | Without these the four NUCs are furniture |
| [Logic Analyser](./logic-analyser.md): confirm the model from its underside | Channel count and sample rate depend on it |
| [Bench PSU](./bench-psu.md): max volts/amps from the labels, and whether channels are isolated | Decides whether A and B can be put in series |
| [Bench Meter](./bench-meter.md): fuse rating and where spares are | A blown current fuse otherwise means out of service |
| [Safety Glasses](./safety-glasses.md): whether they are EN 166 rated | Decides whether they are PPE or just glasses |
| Maintainer for every item | Nobody is calibrating, restocking or fixing any of it |

## Not on this bench yet

The landing page's kit list also promises items that are **not** on the 15 October inventory.
They have pages so the structure is there, each marked as unconfirmed:

- [Reflow oven & stencil jig](./reflow-oven.md)
- The [RF bench](../rf/index.md) — HackRF, TinySA, shielded cage
