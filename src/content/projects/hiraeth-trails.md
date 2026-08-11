---
title: hiraeth_trails
date: 2025-01-01
excerpt: A Flutter + Firebase app for logging and sharing trail data, built end-to-end as a personal software project.
tags: Flutter, Firebase, Mobile
repo: 
demo: 
---

hiraeth_trails started from a simple frustration: most trail-logging apps are
built for casual hikers, not for tracking the kind of technical approach and
descent data that actually matters on an alpine route — elevation gain split
by segment, timestamps at key waypoints, conditions notes tied to a specific
point on the trail.

## What it does

The app lets you log a trail session (route, distance, elevation profile,
waypoint notes) and sync it to Firebase so it's available across devices and
shareable with a climbing partner. Everything is built mobile-first in
Flutter, since the whole point is logging data *during* an approach, not
after the fact at a desk.

## Stack

- **Flutter** for a single codebase across Android/iOS
- **Firebase** (Firestore + Auth) for sync and storage
- Local-first data entry with background sync, since trailheads rarely have
  signal

## Status

This is an active personal project — end-to-end from schema design to UI,
built and maintained solo. Next up is offline elevation-profile rendering so
route data is useful even before a session finishes syncing.
