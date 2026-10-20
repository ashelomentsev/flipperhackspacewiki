# Electronics Bench — Equipment Guide

Oct 15, 2026 · @Andrey Shelomentsev

## At a glance

The bench has 22 pieces of kit. Each has a short wiki name (use it on labels and in the wiki URL) and the exact make/model for spares and manuals.

| Wiki name | Make / model | What it's for |
| --- | --- | --- |
| Main Soldering Station | SUGON A9 (C210 handle, 120 W) | Everyday through-hole and SMD soldering |
| Cordless Pen Iron | SUGON 55G wireless iron + dock | Fine-pitch work, quick touch-ups |
| Hot Air Gun | FNIRSI SAG-55 (550 W) | Removing/fitting SMD parts, heat-shrink |
| Fume Snorkel | Through-desk fume extraction arm | Pulls solder smoke away from your face |
| Microscope Camera | YIZHAN 4K HDMI camera, 0.7–4.5× zoom lens, LED ring light, boom stand | Magnified inspection of boards |
| Microscope Screen | Dell 4K monitor | Shows the microscope image |
| Bench Keyboard | Logitech K400 Plus (keyboard + touchpad) | Controls the device on the screen |
| Oscilloscope | Rigol MSO5074 (4 ch, 70 MHz, 8 GSa/s) | Seeing signals over time |
| Scope Probes | Rigol PVP2350 passive probes (350 MHz) | Connect the scope to your circuit |
| Logic Analyser | Saleae Logic Pro 16 (16 ch, USB-C) | Capturing and decoding digital buses |
| Bench Meter 1 & 2 | OWON XDM1241 (55,000 counts) | Volts, amps, resistance, continuity, more |
| Bench PSU A & B | NANKADF programmable DC power supplies | Powering your project safely |
| Precision Screwdrivers | Wera Kraftform Micro set (pouch) | Tiny Torx, slotted, Phillips screws |
| Screwdriver Rack | Wera Kraftform screwdrivers on wall rack | Full-size screws |
| Rainbow Hex Keys | Wera 950/9 Hex-Plus Multicolour (metric) | Hex/Allen bolts |
| Cutters & Pliers | Flush cutters, pliers on hooks | Trimming leads, gripping |
| Helping Hands | Orange base with 4 gooseneck clip arms | Holding boards and wires |
| ESD Mat | Grey anti-static mat with snap stud | Protecting sensitive parts |
| Solder & Wire Rail | bott reel rail: Weller solder + 6 colours hook-up wire | Solder and wire on tap |
| Document Holder | bott wall holder | Datasheets, schematics |
| Safety Glasses | Clear wrap-around glasses | Eye protection |
| Compute Rack | Mini rack: patch panel, 2 PoE switches, Hackspace-NUC1–4 | Shared computers and network |

The logic analyser is identified from its logo and port labels; check the model on its underside before publishing.

## Bench rules (read first)

1. Wear the safety glasses when soldering, clipping leads or using hot air.
2. Turn the fume snorkel on before you heat anything.
3. Irons and the hot air gun always go back in their stands. Never lay them on the bench.
4. Clip an ESD wrist strap to the mat's snap stud before handling bare boards.
5. Never work on mains-powered circuits at this bench.
6. Wash your hands after handling solder.
7. Before you leave: everything off, tools back where they hang, bench clear.
8. Something broken or running low? Post it in the hackspace channel.

## Soldering

### Main Soldering Station — SUGON A9

A 120 W station that heats a C210 tip in about 2 seconds. Lifting the iron from its holder wakes it; putting it back sends it to sleep.

**How to use**

1. Switch on at the back. The screen shows the set temperature.
2. Pick a preset: **CH1**, **CH2** or **CH3**. Adjust with the **TEMP** arrows; **SET** saves it to that preset.
3. Typical temperatures: 330 °C for leaded solder, 350–370 °C for lead-free, lower for tiny SMD parts.
4. Lift the iron. Wipe the tip in the brass wool (blue cup), tin it with a little solder, then work.
5. Put the iron back in the holder between joints.
6. When done: tin the tip, return it to the holder, switch off.

**Changing tips:** spare tips stand in the holes on top. Grip the hot tip in the metal V-slot and pull the handle straight out. Push the new tip in firmly. No tools needed.

**Don't:** file or scrape tips, use the wet sponge dripping (damp only), or leave it on when you walk away.

### Cordless Pen Iron — SUGON 55G

A 55 g battery iron for fine work. It also takes C210 tips. It charges magnetically in its dock.

**How to use**

1. Press the power button on the pen. The screen shows battery or temperature.
2. In the dock it shows **SLP** (sleep, about 100 °C). Lift it and it heats to working temperature.
3. Adjust temperature with the side wheel/buttons; the screen shows the setting.
4. Clean on the sponge or brass pad in the dock base; spare tips sit in the holes on top.
5. Always return it to the dock so it sleeps and recharges.

**Don't:** take it off the bench or leave it lying outside the dock. A green light means it's ready.

## Hot air and fumes

### Hot Air Gun — FNIRSI SAG-55

A 550 W handheld hot air gun, 100–450 °C, with all controls and a colour screen on the handle. The stand senses the gun magnetically: dock it and it blows cool air, then sleeps.

**How to use**

1. Fit a nozzle while it's cold (850-series nozzles; spares on the steel plate beside the stand).
2. Press the square power button. Use **◀ ▶** to change temperature/airflow, **■** to switch between them or pick one of 3 presets.
3. Starting points: 300–350 °C, airflow 8–12 for small SMD parts. Heat-shrink: about 200 °C.
4. Keep the nozzle moving 1–2 cm above the board. Shield nearby plastic parts with Kapton tape.
5. Dock it in the stand. Wait for the cool-down to finish before unplugging.

**Don't:** point it at people, use it near the solder spools or plastic bins, or touch the nozzle for several minutes after use.

### Fume Snorkel

A flexible arm with a funnel, ducted through the desk to the extraction system.

1. Switch the extractor on before you solder.
2. Bend the funnel to sit 10–20 cm from the joint, slightly behind it.
3. Leave it running a minute after you finish.

## Inspection

### Microscope Camera — YIZHAN 4K HDMI

A 4K camera on a 0.7–4.5× zoom lens with an LED ring light, on a boom stand. It sends its picture over HDMI to the Microscope Screen; no computer needed.

**How to use**

1. Turn on the screen, then the camera (its LED lights orange/green).
2. Turn on the ring light; set brightness with its side knob.
3. Put the board on the black base. Raise or lower the camera on the stand (big knurled knob) until roughly in focus.
4. Zoom with the ring marked 0.7–4.5; fine-focus with the focus knob.
5. Settings menu (exposure, white balance, brightness): use the camera's buttons or a mouse plugged into the camera. Leave settings as you found them.
6. Photos/video save to the camera's SD card if one is fitted.

**Don't:** touch the lens glass, or put hot irons near the lens. Hot air blown at the lens can damage it.

### Microscope Screen — Dell 4K monitor

Shows the microscope image. Use the buttons under the bottom-right edge to switch input if it shows "No signal".

### Bench Keyboard — Logitech K400 Plus

Wireless keyboard with a built-in touchpad (the touchpad works as a mouse). Switch on at the top-right edge. Its tiny USB receiver must be plugged into the device you want to control. Runs on 2 × AA batteries; switch off after use.

## Measurement

### Oscilloscope — Rigol MSO5074

A 4-channel, 70 MHz, 8 GSa/s touchscreen scope. It shows how a voltage changes over time and can decode serial buses (button **Decode**). The wide **LA** socket takes Rigol's 16-channel digital probe, if fitted.

**How to use**

1. Press the power button (bottom-left). Boot takes about 30 s.
2. Plug a probe into **CH1** (yellow). Set the probe switch to **10×**, and check CH1's menu shows probe 10× too.
3. Clip the probe's ground lead to your circuit's ground (0 V), then touch the tip to the signal.
4. Press **AUTO**. The scope finds a sensible view.
5. Adjust with the knobs: **Vertical Scale** (volts per square), **Horizontal Scale** (time per square), **Trigger Level** (steadies the trace).
6. **STOP/RUN** freezes the picture; **SINGLE** captures one event; **Measure** adds readouts like frequency and peak-to-peak.
7. Save screenshots to a USB stick in the front port (**Storage**).
8. Press **Default** before you leave so the next person starts clean.

**Don't:** clip the ground lead to anything not at 0 V. It's connected to mains earth, so you will short that point to earth.

### Scope Probes — Rigol PVP2350

Passive probes: 350 MHz at 10×, much less at 1×. Use 10× for almost everything. If square waves look rounded or spiky, adjust the small screw on the probe while viewing the scope's calibration signal. Store them coiled loosely in their bag; don't kink the cable.

### Logic Analyser — Saleae Logic Pro 16

Records up to 16 digital lines at once and decodes protocols such as I²C, SPI and UART on a computer.

1. Install the free **Logic 2** software (saleae.com) on your laptop or a Hackspace NUC.
2. Connect by USB-C. Connect a ground wire first, then signal wires (test clips are in the yellow bin).
3. In Logic 2, pick the channels, set the voltage level to match your circuit (e.g. 3.3 V), press **Start**.
4. Add an analyser (e.g. I²C) to turn the waveforms into readable data.

**Don't:** connect inputs to anything above ±25 V.

### Bench Meter 1 & 2 — OWON XDM1241

A 55,000-count bench multimeter: very precise readings on a big screen.

| To measure | Press | Red lead in | Black lead in |
| --- | --- | --- | --- |
| DC/AC voltage | V | Top red (VΩ) | COM |
| Resistance, continuity, diode | Ω (beep icon) | Top red (VΩ) | COM |
| Capacitance | ⊣⊢ | Top red (VΩ) | COM |
| Small current (up to \~600 mA) | A | Middle red (mA) | COM |
| Large current (up to 10 A) | A | Bottom red (10A) | COM |

- **Range** for manual range, **Dual** for two readings at once, **Freq** for frequency, **Temp** with a thermocouple.
- To measure current, break the circuit and put the meter in series.
- **Afterwards, move the red lead back to the top (VΩ) socket.** Measuring voltage with the lead in a current socket blows the fuse.

## Power

### Bench PSU A & B — NANKADF programmable DC supplies

Adjustable DC supplies with a current limit, so a wiring mistake trips the supply instead of frying your board. Each also has USB-A and USB-C charging ports. Check the label on top for its maximum volts/amps.

**How to use**

1. Press the power button. Make sure the **OUT** light is off (output disabled).
2. Press **V/A** to choose voltage or current, then turn the knob to set it. Set the voltage your circuit needs and a current limit just above what it should draw (e.g. 0.2 A for a small microcontroller board).
3. Hold **OCP** (or the current setting, per the manual) to turn over-current protection on: the supply cuts out and beeps on a short.
4. Connect the leads: **red = +**, **black = −**. The **green** terminal is earth; leave it unused unless you know you need it.
5. Press **OUT** to switch power on. Watch the amps reading: a jump to the limit means something is wrong — press **OUT** again.
6. When finished: **OUT** off, then disconnect, then power off.

**Tip:** the two supplies can power two separate rails (e.g. 5 V and 3.3 V).

## Hand tools, workholding and storage

### Precision Screwdrivers — Wera Kraftform Micro set

Tiny drivers for electronics: Torx (TX5, TX6 and others), slotted (1.5, 1.8, 2.0 mm) and Phillips. Colour rings show the type; size is printed on the handle. Spin the cap on top with one finger while turning the handle with the others. Pick the size that fills the screw head fully. Return each to its own slot and roll the pouch closed.

### Screwdriver Rack — Wera Kraftform

Full-size slotted, Phillips and Torx screwdrivers on the wall rack. Hang each back in its marked slot.

### Rainbow Hex Keys — Wera 950/9 Hex-Plus Multicolour

Metric hex keys, 1.5–10 mm, one colour per size. The ball end works at an angle for awkward spots; use the straight end for tightening hard or breaking a stuck bolt loose. Clip them back into the holder in size order.

### Cutters & Pliers

Flush cutters leave a flat cut on component leads. Cut copper and component leads only — never steel wire or screws. Hold the offcut so it doesn't fly. Hang them back on the hooks.

### Helping Hands

A heavy orange base with four bendable arms and crocodile clips. Clip the board at its edge, bend the arms to hold it steady, and keep the clips away from components.

### ESD Mat

The grey anti-static mat drains static safely. Clip a wrist strap to the round metal snap stud. Don't cut on it or put hot tools on it.

### Solder & Wire Rail

The rail holds Weller solder reels on each end and six colours of hook-up wire in between. Pull off what you need and cut it; don't take reels off the rail. Check the reel label for leaded or lead-free and set your iron to match. Red = power, black = ground is the usual convention.

### Document Holder

The bott holder on the wall keeps datasheets and schematics upright at eye level. Take your papers with you when you leave.

### Safety Glasses

Clear wrap-around glasses. Wear them for soldering, cutting leads and hot air. Clean with a cloth and leave them on the bench.

## Compute Rack

A mini rack holding a patch panel, two PoE network switches and four shared mini PCs. Top to bottom:

| Unit | Label | Address | Notes |
| --- | --- | --- | --- |
| Patch panel | Ports 1/1–1/8, 2/1–2/8 | — | Pre-patched; don't move cables |
| Switch | sw07-fg | — | 2.5 GbE, PoE, SFP+ uplink |
| Switch | sw08-fg | — | 2.5 GbE, PoE, SFP+ uplink |
| Mini PC | Hackspace-NUC1 | 172.20.0.101 | Front: USB-C 20G, 2 × USB-A 10G, power |
| Mini PC | Hackspace-NUC2 | 172.20.0.102 | As above |
| Mini PC | Hackspace-NUC3 | 172.20.0.103 | As above |
| Mini PC | Hackspace-NUC4 | 172.20.0.104 | As above |

**How to use**

1. Connect to the hackspace network, then reach a NUC by its address above.
2. Plug USB devices (e.g. the logic analyser) into the front ports of the NUC you're using.
3. Shut down from the operating system. Use the front power button only if a NUC is frozen.
4. Don't unplug, re-patch or power off switches.

**To fill in before publishing:** operating system, how to log in, and who to contact if a NUC is down.
