import { colors } from "./colors";

// Re-export so screens pull every token from one place: `constants/theme`.
export { colors };

/**
 * Verza design system — "Athletic Editorial + Playful".
 * Warm paper canvas, near-black ink, vibrant colour-blocks, huge expressive
 * numerals. Tokens are the single source of truth for the whole app.
 */

// Display fonts (loaded via expo-font in app/_layout). Body uses the system face.
export const fonts = {
  display: "Anton_400Regular", // huge numerals + 1–3 word headlines (condensed athletic)
  heavy: "Archivo_900Black",
  bold: "Archivo_800ExtraBold",
  medium: "Archivo_700Bold",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  xxxl: 40,
} as const;

export const radius = {
  sm: 14,
  md: 20,
  lg: 26,
  xl: 32,
  xxl: 38,
  blob: 46,
  pill: 999,
} as const;

export const fontSize = {
  micro: 11,
  caption: 12,
  footnote: 13,
  body: 15,
  callout: 16,
  headline: 18,
  title3: 20,
  title2: 24,
  title1: 30,
  display: 40,
  hero: 56,
  giant: 84,
  monstrous: 116,
} as const;

export const fontWeight = {
  regular: "500",
  medium: "600",
  semibold: "700",
  bold: "800",
  heavy: "900",
} as const;

export const tracking = {
  display: -1.4,
  headline: -0.5,
  body: 0,
  label: 0.6,
} as const;

// Spring / timing presets tuned for a lively, characterful feel.
export const motion = {
  press: { damping: 15, stiffness: 400, mass: 0.5 },
  spring: { damping: 18, stiffness: 200, mass: 0.9 },
  gentle: { damping: 22, stiffness: 120, mass: 1 },
  bouncy: { damping: 8, stiffness: 180, mass: 0.8 },
  ring: { damping: 14, stiffness: 90, mass: 1 },
  duration: { fast: 140, base: 220, slow: 440, xslow: 760 },
} as const;

// Soft neutral lift + colored glow for premium light UI.
export const shadow = {
  none: {},
  card: {
    shadowColor: "#16150F",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 18,
    elevation: 3,
  },
  float: {
    shadowColor: "#16150F",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.12,
    shadowRadius: 30,
    elevation: 8,
  },
  glow: {
    shadowColor: colors.flame,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.38,
    shadowRadius: 22,
    elevation: 10,
  },
} as const;

// Colored elevation — pass an accent so a CTA/card glows in its own colour.
export function glow(color: string) {
  return {
    shadowColor: color,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 22,
    elevation: 10,
  };
}

export const gradients = {
  brand: ["#FF7A4D", "#FF4D1C"] as const,
  brandSoft: ["#FF9466", "#FF4D1C"] as const,
  volt: ["#E4FF6A", "#CFF53B"] as const,
  flame: ["#FF9F1C", "#FF4D1C"] as const,
  cobalt: ["#5C86FF", "#2B5BFF"] as const,
  magenta: ["#FF6BB0", "#FF2E92"] as const,
  grape: ["#9A66FF", "#7A3CFF"] as const,
  mint: ["#3AEAC0", "#10C9A0"] as const,
  gold: ["#FFC04D", "#FF9F1C"] as const,
  // The one dramatic dark block on the light canvas.
  ink: ["#211F16", "#100F0A"] as const,
  hero: ["#211F16", "#100F0A"] as const,
  // Legacy aliases (kept so older code keeps rendering).
  navy: ["#FBF9F4", "#F3EFE7"] as const,
  panel: ["#FFFFFF", "#FBF8F1"] as const,
  glass: ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.6)"] as const,
  xp: ["#5C86FF", "#2B5BFF"] as const,
  success: ["#3AEAC0", "#10C9A0"] as const,
  verified: ["#5CE0FF", "#2B5BFF"] as const,
} as const;

export type GradientKey = keyof typeof gradients;

export const sportGradients: Record<string, readonly [string, string]> = {
  football: ["#FF6A2B", "#FF4D1C"],
  basketball: ["#FFB23E", "#FF7A00"],
  soccer: ["#27E6B0", "#10C9A0"],
  baseball: ["#5C86FF", "#2B5BFF"],
  track: ["#9A66FF", "#7A3CFF"],
  volleyball: ["#FF5BA8", "#FF2E92"],
  tennis: ["#E4FF5C", "#C6F000"],
  default: ["#FF6A2B", "#FF4D1C"],
};

export function gradientForSport(sport?: string): readonly [string, string] {
  if (!sport) return sportGradients.default;
  const key = sport.trim().toLowerCase();
  return sportGradients[key] ?? sportGradients.default;
}

export function colorForSport(sport?: string): string {
  return gradientForSport(sport)[1];
}

export const hairline = 0.5;

export const layout = {
  screenPadding: 20,
  cardPadding: 20,
  gap: 16,
  blockGap: 14,
  tabBarClearance: 112,
} as const;
