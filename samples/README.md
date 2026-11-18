# Selected source samples

These five files were copied unchanged from the Verza development repository at source revision `ca88cffaaf8caf6133e6add11eb7f48af76b9563`.

| Portfolio path | Original project path |
| --- | --- |
| `components/ui/PressableScale.tsx` | `artifacts/mobile/components/ui/PressableScale.tsx` |
| `components/ui/ProgressRing.tsx` | `artifacts/mobile/components/ui/ProgressRing.tsx` |
| `constants/theme.ts` | `artifacts/mobile/constants/theme.ts` |
| `constants/colors.ts` | `artifacts/mobile/constants/colors.ts` |
| `lib/haptics.ts` | `artifacts/mobile/lib/haptics.ts` |

The relative directory layout has been retained so imports between the samples remain understandable. The samples depend on React, React Native, React Native Reanimated, React Native SVG, and Expo Haptics in the full application. The theme also references fonts loaded elsewhere in that application.

This folder is for code review. It does not contain the application entry point, package configuration, backend setup, or the remaining app source needed to run Verza.
