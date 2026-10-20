---
title: NFC & RFID
sidebar_position: 20
description: 13.56 MHz NFC and 125 kHz proximity cards. Your own credentials only, and that includes your door card.
---

# NFC & RFID

Two separate subsystems that get talked about as one:

- **125 kHz RFID** — the old proximity cards. EM4100, HID Prox and friends. Mostly no
  cryptography at all; the card says its number to anyone who asks.
- **13.56 MHz NFC** — MIFARE Classic and DESFire, NTAG, and the public data on payment cards.
  Some of it genuinely secure, some of it famously not.

:::danger[Your own credentials only — and that includes your hackspace card]
Reading, saving and emulating a credential you own is fine. Anything else is not, and the line
is not where people assume:

- **Your own hackspace door card is out of scope too.** Cloning it is prohibited — see
  [How to get in](../../start-here/how-to-get-in.md). The access log is only worth something
  while one credential means one person.
- **A card you found on a bench is not yours.**
- **Reading cards in someone's pocket is never a demonstration.**
- **Many cards carry personal data**, and reading it makes you a data controller with duties
  under the Data Protection Act 2018.
- **Payment cards: never.** No skimming, no relay, no "look what it shows", including the public
  data.

[Responsible use](../responsible-use.md) is binding.
:::

## What is worth doing here

- **Read your own travel card, hotel card, gym fob, office badge** (if your employer agreed in
  writing). Look at the sector layout and work out how it is structured.
- **Write your own NTAG tags.** URLs, vCards, tiny data. Unrestricted, useful, and a good way to
  learn the stack.
- **Build something with a reader on your own board**, then use the Flipper to understand what
  your reader is doing wrong.
- **Read the Mifare Classic literature** and reproduce it against a blank card you bought to be
  broken. That is real research with nobody else involved.

## Known traps

- **125 kHz cards have no security to break.** They broadcast an ID. The lesson is architectural
  — plenty of real doors still rely on it — and that lesson does not require you to open a real
  door.
- **MIFARE Classic is broken and still everywhere.** Also: the published attacks need the real
  reader or the real card, which is exactly where the policy line falls.
- **"Unknown card" usually means an unsupported type**, not a secure one.
- **Emulation is not always indistinguishable.** Readers can and do detect it, and a logged
  failed emulation against a third-party system is evidence of an attempt.
- **Don't post card dumps.** They contain identifiers, and sometimes personal data.

## Links

- [Responsible use](../responsible-use.md) — **binding**
- [How to get in](../../start-here/how-to-get-in.md) — why your own card is off limits
- [Official NFC documentation](https://docs.flipper.net)
