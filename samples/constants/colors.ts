// Verza "Athletic Editorial + Playful" palette — warm paper canvas, near-black
// ink, and a vibrant 6-colour accent set deployed as bold colour-blocks.
// Existing token keys are kept (remapped to light values) so the whole app
// re-skins centrally; new vibrant keys + tints power the colour-block sections.
export const colors = {
  // --- Base surfaces (warm paper, light) ---
  background: "#FBF9F4",
  backgroundAlt: "#F3EFE7",
  surface: "#FFFFFF",
  surfaceSunk: "#F1ECE2",
  surfaceInk: "#15140F",
  panel: "#FFFFFF",
  panelRaised: "#FBF8F1",
  panelHigh: "#EFEADF",

  // --- Ink / text (warm near-black) ---
  ink: "#16150F",
  inkSoft: "#45433A",
  inkFaint: "#8A877B",
  text: "#16150F",
  textMuted: "#56544A",
  textFaint: "#8E8B7F",

  // --- Lines ---
  line: "#E8E3D8",
  lineSoft: "#F0ECE2",
  lineStrong: "#16150F",

  // --- Vibrant accent set (colour blocks) ---
  volt: "#CFF53B",
  flame: "#FF4D1C",
  cobalt: "#2B5BFF",
  magenta: "#FF2E92",
  tangerine: "#FF9F1C",
  grape: "#7A3CFF",
  mint: "#10C9A0",

  // --- Existing accent keys → flame (high contrast on white) ---
  accent: "#FF4D1C",
  accentSoft: "#FF7A4D",
  accentDeep: "#DC3A0E",
  accentGlow: "rgba(255,77,28,0.40)",

  // --- Semantic ---
  success: "#10C9A0",
  warning: "#FF9F1C",
  danger: "#FF3B47",
  blue: "#2B5BFF",
  gold: "#FF9F1C",
  xp: "#2B5BFF",
  xpSoft: "#5C86FF",
  flameSoft: "#FF7A4D",

  // --- On-colour text ---
  onVolt: "#16150F",
  onDark: "#FBF9F4",
  white: "#FFFFFF",

  // --- Soft tint washes of each accent (section fills) ---
  voltTint: "#EEFBC2",
  flameTint: "#FFE6DC",
  cobaltTint: "#E1E9FF",
  magentaTint: "#FFDDED",
  tangerineTint: "#FFEFD4",
  grapeTint: "#ECE4FF",
  mintTint: "#D2F6EE",

  // --- Glass / overlay (light) ---
  glassFill: "rgba(255,255,255,0.72)",
  glassBorder: "rgba(22,21,15,0.08)",
  scrim: "rgba(20,19,12,0.55)",
} as const;
