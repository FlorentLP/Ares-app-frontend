import { DefaultTheme, PaperProvider } from "react-native-paper";
import HomeScreen from "./components/HomeScreen";

const yourGeneratedLightOrDarkScheme = {
  colors: {
    primary: "rgb(0, 108, 69)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(144, 247, 191)",
    onPrimaryContainer: "rgb(0, 33, 18)",
    secondary: "rgb(138, 80, 0)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 220, 190)",
    onSecondaryContainer: "rgb(44, 22, 0)",
    tertiary: "rgb(120, 74, 154)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(243, 218, 255)",
    onTertiaryContainer: "rgb(46, 0, 77)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(251, 253, 248)",
    onBackground: "rgb(25, 28, 26)",
    surface: "rgb(251, 253, 248)",
    onSurface: "rgb(25, 28, 26)",
    surfaceVariant: "rgb(220, 229, 220)",
    onSurfaceVariant: "rgb(64, 73, 67)",
    outline: "rgb(112, 121, 114)",
    outlineVariant: "rgb(192, 201, 192)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(46, 49, 46)",
    inverseOnSurface: "rgb(239, 241, 237)",
    inversePrimary: "rgb(115, 218, 164)",
    elevation: {
      level0: "transparent",
      level1: "rgb(238, 246, 239)",
      level2: "rgb(231, 241, 234)",
      level3: "rgb(223, 237, 228)",
      level4: "rgb(221, 236, 227)",
      level5: "rgb(216, 233, 223)",
    },
    surfaceDisabled: "rgba(25, 28, 26, 0.12)",
    onSurfaceDisabled: "rgba(25, 28, 26, 0.38)",
    backdrop: "rgba(42, 50, 45, 0.4)",
  },
};
const theme = {
  ...DefaultTheme,
  colors: yourGeneratedLightOrDarkScheme.colors, // Copy it from the color codes scheme and then use it here
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <HomeScreen></HomeScreen>
    </PaperProvider>
  );
}
