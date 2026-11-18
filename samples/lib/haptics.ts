import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

/**
 * Thin, crash-safe wrapper around expo-haptics.
 *
 * Every call is fire-and-forget and swallows errors so a missing Taptic Engine
 * (simulator, web, older devices) never throws. Use these everywhere a touch
 * produces a meaningful result — the app should *feel* alive in the hand.
 */

const supported = Platform.OS === "ios" || Platform.OS === "android";

function run(fn: () => Promise<unknown>) {
  if (!supported) return;
  try {
    fn().catch(() => {});
  } catch {
    // no-op
  }
}

export const haptic = {
  /** Light tap — selections, small toggles, list taps. */
  light: () => run(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)),
  /** Medium tap — primary buttons, confirmations. */
  medium: () => run(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)),
  /** Heavy tap — big commits, destructive actions. */
  heavy: () => run(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)),
  /** Soft, cushioned tap — card presses, gentle feedback. */
  soft: () => run(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)),
  /** Crisp, sharp tap — segmented controls, ticks. */
  rigid: () => run(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)),
  /** Selection change — pickers, segmented controls, sliders. */
  selection: () => run(() => Haptics.selectionAsync()),
  /** Success notification — completed actions, unlocks. */
  success: () => run(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)),
  /** Warning notification. */
  warning: () => run(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)),
  /** Error notification — failed validation, blocked actions. */
  error: () => run(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)),
};

export type Haptic = typeof haptic;
