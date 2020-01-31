# X-Y-Controller

**File Created By:** Naman Jain

**Last Update:** 1/5/2020

This is a collaborated university embedded systems project created by Naman Jain and Anubhav Saini. To learn more check out our project presentation [Slides]!

## Project Technologies and Resources :

- [Diptrace] (Schematic) (PCB Design) (Manual Wire Routing)
- [MSP-EXP430FR4133] (Micro-Controller Board)
- [Rigidware MarketPlace] (University Store) (Circuitry parts and wiring)
- [Soldering] (Soldering Iron Kits)(Solder Suction)(Solder Paste)(Heat Gun)
- [Oscilloscope] (Circuitry Debugging)

## Data Sheets

- [MSP User Guide]
- [Stepper Motor Driver]
- [Decoders + Multiplexer]
- [SCHOTTKY DIODE]
- [Capacitor]
- [Large Capacitor]
- [KeyPad]
- [Stepper Motor]
- [Testing Stepper Motor Driver]
- [REFL Sensor]

## Objectives

- A two-axis system where each axis is driven by a single stepper motor
- Each axis has limiters in the form of REFL Light Sensors
- User enters coordinates of desired position via Keypad
- Coordinates displayed on LCD
- Prepare and design a PCB board that is placed upon a micro controller
- Print the PCB from a factory and then solder the components
- Assembly external wires and components to the board

## Visuals

![Project Schematic](https://firebasestorage.googleapis.com/v0/b/storage-for-projects.appspot.com/o/Schematic%20Design.png?alt=media&token=a768c626-d163-4b11-878d-ef2b09a010ed)

---(Schematic of the PCB Design)---

This Diagram is created using diptrace to allow a high level view of what the routing will look like in the final PCB Design. This tool allows the user to easily find routing mistakes and open connections.

![PCB Diagram](https://firebasestorage.googleapis.com/v0/b/storage-for-projects.appspot.com/o/pcb%20routing.png?alt=media&token=aa9da03f-c664-4e67-8560-9a63efa13afb)

---(PCB Final Layout)---

This diagram is made using diptrace. This tool is useful because production factories can take the produced file and print out the solid PCB easily. Due to space constraints our design is a little messy. There are too many shared lines, and because of 16 diodes we have many wires crossing over. Both the top and bottom of the board are shown here.

![PCB Top](https://firebasestorage.googleapis.com/v0/b/storage-for-projects.appspot.com/o/solder%20top.jpg?alt=media&token=f9645fa9-86d3-456a-8b33-00efecda9b50)

![Bottom](https://firebasestorage.googleapis.com/v0/b/storage-for-projects.appspot.com/o/solder%20bottom.jpg?alt=media&token=4e0a6e08-397c-4091-8673-cc264e50d14a)

---(PCB Printed and Soldered **Front, Bottom** )---

This is the final production model PCB that was printed and then soldered. Our board is a little messy because this was our first time using a solder. The diodes were so hard to solder (they needed to be seen under a microscope) that we needed to un-solder and solder them many times. This led to our board getting a little brunt up.

## Contribution and Usage Rights

Pull requests are welcome. No changes allowed! Please do not copy the documents provided as they are our academic properties. Please credit where images are used. This project took us 50 hrs + so if you spend less time than that on this project you copied us too much!


[Diptrace]: <https://diptrace.com/>
[Rigidware MarketPlace]: <https://www.engsoc.uwaterloo.ca/ridgidware/>
[Oscilloscope]: <https://github.com/ArthurHub/Android-Image-Cropper>
[Slides]: <https://docs.google.com/presentation/d/1CYS54YSZ_er0cwmIdWw0txBPDk2QcQ2v4sf5bczO5I4/edit?usp=sharing>
[Soldering]:<https://www.youtube.com/watch?v=4dTOGQfEW18&feature=emb_logo>
[MSP User Guide]:<http://www.ti.com/lit/ug/slau144j/slau144j.pdf>
[Stepper Motor Driver]:<https://www.diodes.com/assets/Datasheets/ULN200xA.pdf>
[Decoders + Multiplexer]: <http://www.ti.com/lit/ds/symlink/cd74hc4051.pdf>
[SCHOTTKY DIODE]: <https://www.onsemi.com/pub/Collateral/RB521S30T1-D.PDF>
[Capacitor]: <https://content.kemet.com/datasheets/KEM_C1006_X5R_SMD.pdf>
[Large Capacitor]: <http://datasheets.avx.com/cx5r.pdf>
[KeyPad]:<https://cdn.sparkfun.com/assets/7/e/f/6/f/sparkfun_keypad.pdf>
[Stepper Motor]: <https://www.mouser.com/datasheet/2/758/stepd-01-data-sheet-1143075.pdf>
[Testing Stepper Motor Driver]: <https://www.electronicoscaldas.com/datasheet/ULN2003A-PCB.pdf>
[REFL Sensor]: <https://cdn.sparkfun.com/datasheets/Sensors/Proximity/QRE1113.pdf>
[MSP-EXP430FR4133]:<https://www.digikey.ca/product-detail/en/texas-instruments/MSP-EXP430FR4133/296-38441-ND/5015721?utm_adgroup=General&utm_source=google&utm_medium=cpc&utm_campaign=Dynamic%20Search&utm_term=&mkwid=sahusjRqb&pcrid=399522456396&pkw=&pmt=b&pdv=c&productid=&slid=&gclid=Cj0KCQiAr8bwBRD4ARIsAHa4YyL2k7evjTTZlRN8UAjDDrvQOyDtju9VWss8Z3HPEGq3cQk-wchJ_b4aAjQ0EALw_wcB>
