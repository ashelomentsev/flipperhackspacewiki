---
title: Responsible use
sidebar_position: 2
description: Binding policy for RF, NFC, RFID and access-control work at Flipper Hackspace. Read before you transmit anything.
---

# Responsible use

**This page is binding on members.** It covers Flipper Zero, the
[RF bench](../tools/rf/index.md), and anything else here that transmits, reads a credential, or
touches an access control system.

It exists because the space has three things to protect and they all point the same way: **you**
from a criminal record, **the space** from losing its insurance and its lease, and **Flipper
Devices** — whose office is on floor 03 — from being the company whose hackspace was in the
news.

## The principle

> **Only on systems you own, or have specific written permission to test.**

Everything below follows from that one sentence. If you can hold the sentence in your head you
will not need the rest of the page.

"Specific" rules out a general agreement. "Written" rules out a verbal nod from a friend who
works there. "Permission" has to come from someone with the authority to give it.

## Allowed, encouraged, the reason the space has this kit

- **Receiving.** Listening to the spectrum is how you learn it, and in the UK receiving is
  largely unrestricted.
- **Transmitting into the [shielded cage](../tools/rf/rf-shielded-cage.md)** or a dummy load.
- **Reading, cloning and attacking credentials you own.** Your own car fob, your own garage,
  your own hotel card from a stay you paid for, your own office badge if your own employer said
  yes in writing.
- **Your own hardware, all of it.** Your board, your protocol, your firmware, your bugs.
- **Published research, reproduced on your own equipment.**
- **Low-power ISM-band transmission to your own receiver**, within the UK licence-exempt limits.
- **CTF targets, deliberately vulnerable kit, and gear bought to be broken.**
- **Paid engagements**, with the scope document in your hand.

## Not allowed, here or anywhere, as a member

### Other people's systems

- **Any system you do not own and have no written permission to test.** Cars in the car park,
  the gym's lockers, the neighbour's gate, a shop's door, a hotel you are not staying in.
- **The building's own access control.** Explicitly: not the street door, not the internal
  doors, not the machine lockouts, not the sign-in board. See
  [How to get in](../start-here/how-to-get-in.md) — including cloning *your own* card.
- **Other members' cards, lockers, badges or devices**, with or without a joke attached.
- **Credentials you found.** A card left on a bench is not consent.

### Transmitting

- **Any transmission on a band you are not licensed for.** In the UK this is an offence under
  the **Wireless Telegraphy Act 2006**. Ofcom locates sources, and a hackspace with a known
  address is not a difficult search.
- **Jamming or denial of service.** Separately illegal, and there is no research justification
  that lands with a regulator.
- **Replaying a capture over the air** where a real receiver could hear it, even "just to see".
  A garage door that opens is not a test, it is unauthorised access.
- **Anything near safety-of-life or licensed services.** Aviation, marine, emergency services,
  rail, medical telemetry. Not even receive-and-replay in a cage if the capture came from one of
  these.
- **Transmitting on the roof, out of a window, or into the car park.** If it leaves the building,
  it is over the air.

### Everything else

- **Skimming payment cards or reading cards in other people's pockets.** No exceptions, no
  demonstrations.
- **Capturing personal data from a credential you do not own.** Many cards carry personal data,
  and reading it makes you a data controller with duties under the **Data Protection Act 2018**
  and UK GDPR.
- **Attacking a system to show a friend what it can do.** This is how almost every incident in
  this category starts.
- **Infrared against anything you do not own.** It is low-stakes right up until it is a hospital
  or a cinema.
- **Teaching any of the above at an event.** See below.

## At events

[Bench sessions](../events/bench-sessions.md) and workshops are where a space's culture gets set,
so the rules are tighter, not looser:

- **No live demonstrations against third-party systems.** Not a real car, not a real lock, not a
  real badge reader, not "a system I found". A demo rig, a cage, or a slide.
- **Guests are your responsibility.** If you bring someone and they do something off this list,
  that is on you.
- **Nothing on this list gets taught**, including as a "this is what's possible" aside. A room of
  twenty people contains at least one who will try it on the way home.
- **If an event is going that way, stop it.** Any member can call it; nobody will be
  second-guessed for doing so. Then tell a space lead.

## Firmware

Third-party firmware that removes regional transmit restrictions is **permitted on the premises
and not permitted as an excuse.** The restriction being gone does not make the transmission
legal, and "the firmware let me" is not a defence anyone has ever successfully used.

See [Firmware](./firmware.md) for the detail. In short: unlocked firmware belongs in the
[cage](../tools/rf/rf-shielded-cage.md).

## If you find a vulnerability

It happens, often by accident, and handled well it is the best thing you can do with it.

1. **Stop.** Do not explore further, do not see how far it goes, do not test it twice. Each
   additional probe is a separate act and makes your position worse.
2. **Do not tell the room.** Not the Telegram, not a friend, not a talk.
3. **Write down what you did**, factually, with timestamps. This is your record of acting in
   good faith.
4. **Tell a space lead** before you tell the vendor. They have done this before and the space
   has a reputational interest in it going properly.
5. **Disclose to the vendor**, privately, with a reasonable deadline. Use their security contact
   or a CVD programme if they have one.
6. **Do not accept a bug bounty for something you found outside the bounty's scope** without
   advice. It can read as an admission.

**The UK has no researcher exemption.** The **Computer Misuse Act 1990** turns on
*authorisation*, not on intent or harm — good motives and no damage are not a defence to
unauthorised access. The **Fraud Act 2006** covers possessing or making an article for use in
fraud, which is a real risk for cloned credentials. This is why step 1 is *stop*.

## Why the space is strict about this

Not squeamishness. Three concrete things:

1. **A hackspace is a soft target for a prosecution.** A clear address, a membership list, and a
   public wiki describing the kit. The space's defence is that its policy is explicit and
   enforced — which only works if it is actually enforced.
2. **One incident ends the space.** Insurance, lease, and the goodwill that makes a 24/7
   hardware space possible in London all evaporate together.
3. **The brand on the door.** Flipper Zero already fights a reputation it does not deserve. A
   space run by the manufacturer handing out access-control tricks would confirm a story that is
   currently false, and that is a cost borne by every member here.

## Consequences

**Membership withdrawn**, and the space will cooperate with any investigation. This is the
shortest route out of the building that exists, shorter than the
[house rules](../start-here/house-rules.md) three.

Where the space has a legal duty to report something, it will.

## Not legal advice

:::warning[This page needs a solicitor's eye]
Written as house policy by members, not by lawyers. The statutes named — Computer Misuse Act
1990, Wireless Telegraphy Act 2006, Fraud Act 2006, Data Protection Act 2018 — are named to
show *why* the rules exist, not to summarise the law accurately or completely.

**Before the space takes its first member, this page should be reviewed by a solicitor** and by
Flipper Technologies Ltd. It is one of the two pages on this wiki with legal weight — see
[Editing this wiki](../contributing.md) — and it should not be edited casually.

If you need to know whether something specific is lawful, ask a lawyer, not a wiki.
:::

## If you are not sure

**Ask before, not after.** A space lead, in Telegram or in person. "Is this OK?" has never once
gone badly for anyone here; the alternative has gone badly for people elsewhere.
