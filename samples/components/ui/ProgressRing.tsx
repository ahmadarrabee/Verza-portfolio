import { useEffect, useRef } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { colors } from "../../constants/theme";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

let gradientSeq = 0;

type Props = {
  progress: number; // 0..1
  size?: number;
  stroke?: number;
  gradient?: readonly [string, string];
  trackColor?: string;
  duration?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function ProgressRing({
  progress,
  size = 120,
  stroke = 12,
  gradient = [colors.accentSoft, colors.accent],
  trackColor = colors.panelHigh,
  duration = 1100,
  children,
  style,
}: Props) {
  const gradId = useStableId();
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, progress));

  const animated = useSharedValue(0);
  useEffect(() => {
    animated.value = withTiming(clamped, { duration, easing: Easing.out(Easing.cubic) });
  }, [clamped, duration, animated]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - animated.value),
  }));

  return (
    <View style={[{ width: size, height: size }, style]}>
      <Svg width={size} height={size} style={styles.svg}>
        <Defs>
          <LinearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor={gradient[0]} />
            <Stop offset="100%" stopColor={gradient[1]} />
          </LinearGradient>
        </Defs>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={stroke}
          fill="none"
        />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
        />
      </Svg>
      <View style={[StyleSheet.absoluteFill, styles.center]} pointerEvents="none">
        {children}
      </View>
    </View>
  );
}

function useStableId(): string {
  // Stable per mount; avoids Math.random while keeping gradient ids unique.
  const ref = useRef<string | null>(null);
  if (ref.current === null) {
    gradientSeq += 1;
    ref.current = `ring-grad-${gradientSeq}`;
  }
  return ref.current;
}

const styles = StyleSheet.create({
  svg: { transform: [{ rotate: "-90deg" }] },
  center: { alignItems: "center", justifyContent: "center" },
});
