# Technical overview

## Application structure

Verza uses Expo and React Native for the mobile interface, TypeScript for application code, and Expo Router for screen navigation. Supabase provides authentication, PostgreSQL data storage, media storage, and realtime updates.

The development project contains screens for discovery, profiles, messaging, opportunities, clubs, leagues, and tournaments. Shared interface components and theme values support consistent presentation across those screens.

## Included examples

`PressableScale` combines React Native's press handling with Reanimated spring and timing animations. It forwards press callbacks and can trigger an Expo haptic response through a platform-aware helper.

`ProgressRing` clamps a supplied progress value to the range from zero to one, converts it into an SVG stroke offset, and animates the result. It assigns a stable gradient identifier for each mounted instance.

The colour and theme modules centralize the palette, spacing, typography, gradients, and motion settings used by the interface.

## Development status

The founder reports that Verza is in its final testing stage. This portfolio documents selected implementation work and development screens. It does not establish release readiness, successful completion of testing, app-store availability, user adoption, or recruiting outcomes.

The leaderboard screenshot uses fixed sample entries from the development code. Its scores and ranks illustrate the interface.
