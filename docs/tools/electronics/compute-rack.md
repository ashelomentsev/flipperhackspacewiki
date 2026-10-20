---
title: Compute Rack
sidebar_position: 70
description: Four shared mini PCs and the bench network. Don't re-patch anything.
---

# Compute Rack

| | |
| --- | --- |
| **Make / model** | Mini rack: patch panel, 2 × PoE switch, Hackspace-NUC1–4 |
| **Location** | 02 — electronics lab, main bench |
| **Maintainer** | _needs an answer_ |
| **Induction** | Not required |
| **Status** | _needs an answer_ |
| **Manual** | Not applicable |

A mini rack holding a patch panel, two PoE network switches and four shared mini PCs.
Top to bottom:

| Unit | Label | Address | Notes |
| --- | --- | --- | --- |
| Patch panel | Ports 1/1–1/8, 2/1–2/8 | — | Pre-patched; **don't move cables** |
| Switch | sw07-fg | — | 2.5 GbE, PoE, SFP+ uplink |
| Switch | sw08-fg | — | 2.5 GbE, PoE, SFP+ uplink |
| Mini PC | Hackspace-NUC1 | 172.20.0.101 | Front: USB-C 20G, 2 × USB-A 10G, power |
| Mini PC | Hackspace-NUC2 | 172.20.0.102 | As above |
| Mini PC | Hackspace-NUC3 | 172.20.0.103 | As above |
| Mini PC | Hackspace-NUC4 | 172.20.0.104 | As above |

## How to use

1. Connect to the hackspace network, then reach a NUC by its address above.
2. **Plug USB devices into the front ports** of the NUC you're using — the
   [Logic Analyser](./logic-analyser.md) is the usual one.
3. **Shut down from the operating system.** Use the front power button only if a NUC is frozen.
4. **Don't unplug, re-patch or power off the switches.** The patch panel is pre-patched and
   tracing it again is somebody's evening.

:::info[Needs a real answer — before this page is useful]
Three things, flagged in the source inventory and still open:

- **Which operating system** the NUCs run.
- **How to log in** — shared account, per-member account, or SSH key.
- **Who to contact** when a NUC is down.

Until these are answered a member cannot actually use the rack, which makes this the highest-
value blank in the electronics section.
:::

## Don't

- **Don't leave your captures and project files on a shared NUC.** Take them with you; assume
  anything left is fair game for the next person's disk cleanup.
- **Don't install things that need to persist** and then rely on them being there.

## If it breaks

Safe to try: the front power button on a frozen NUC, after trying to shut down
properly.

Switches, the patch panel and anything involving a cable in the rack: don't. Post in the
hackspace channel.

## Links

- [Logic Analyser](./logic-analyser.md)
- [Bench Keyboard](./bench-keyboard.md)
