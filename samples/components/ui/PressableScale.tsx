import { forwardRef } from "react";
import { Pressable, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { haptic } from "../../lib/haptics";
import { motion } from "../../constants/theme";

type HapticKind = "light" | "medium" | "heavy" | "soft" | "selection" | "none";

type Props = Omit<PressableProps, "style"> & {
  style?: StyleProp<ViewStyle>;
  /** Scale applied while pressed. */
  scaleTo?: number;
  /** Dim while pressed (0–1 opacity at press). */
  dimTo?: number;
  /** Haptic fired on press-in. */
  haptics?: HapticKind;
  children?: React.ReactNode;
};

// Make the Pressable itself animatable so the user's `style` (including
// flex / margins / alignSelf) lands on the actual layout element. The previous
// implementation wrapped children in an inner Animated.View and applied
// `style` there — which meant `flex: 1` would never make the outer Pressable
// fill its row slot, leaving cards collapsed to content width.
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * The touchable used everywhere in Verza. Springs down on press, fires a
 * haptic, and springs back — the single biggest contributor to a "native,
 * alive" feel.
 */
export const PressableScale = forwardRef<React.ComponentRef<typeof Pressable>, Props>(
  function PressableScale(
    { style, scaleTo = 0.96, dimTo = 1, haptics = "light", onPressIn, onPressOut, children, ...rest },
    ref,
  ) {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    }));

    return (
      <AnimatedPressable
        ref={ref}
        style={[style, animatedStyle]}
        onPressIn={(e) => {
          scale.value = withSpring(scaleTo, motion.press);
          if (dimTo < 1) opacity.value = withTiming(dimTo, { duration: 90 });
          if (haptics !== "none") haptic[haptics]();
          onPressIn?.(e);
        }}
        onPressOut={(e) => {
          scale.value = withSpring(1, motion.press);
          if (dimTo < 1) opacity.value = withTiming(1, { duration: 140 });
          onPressOut?.(e);
        }}
        {...rest}
      >
        {children}
      </AnimatedPressable>
    );
  },
);
