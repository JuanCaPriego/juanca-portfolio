---
title: Fall-Force Load Cell
date: 2024-06-01
excerpt: Instrumented load measurement concept for climbing protection, static cordino monitoring and dynamic fall-force capture.
tags: ESP32, Embedded, Hardware
repo: 
demo: 
---

A concept device for measuring real load on climbing protection, split into
two distinct measurement problems: slow, static load (a cordelette or
anchor under normal tension) and fast, dynamic load (an actual fall event).

## The two measurement modes

**Static monitoring** uses an HX711 amplifier with an S-type load cell to
track tension on an anchor point over time — low sample rate, optimized for
battery life, useful for validating anchor setups.

**Dynamic fall capture** is the harder problem: a real fall event happens in
milliseconds and needs a high-speed ADC sampling into a circular buffer on an
ESP32, so the device can capture the full force curve of an impact rather
than just a peak value, without needing to constantly stream data.

## Why it's interesting

Most consumer load-measurement gear reports a single peak number. The
circular-buffer approach means you can go back and look at the actual shape
of the force curve — how fast it ramped up, whether there was a secondary
bounce — which is the kind of detail that matters for understanding how gear
actually behaves under a real fall, not just a static pull test.

## Status

Concept-stage: core measurement approach validated on the bench, packaging
and field-testing in an actual climbing context is the next phase.
