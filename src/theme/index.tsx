import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { useMemo } from "react";

type ThemeConfigProps = {
  children: any;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const darkThemeOptions: any = useMemo(
    () => ({
      palette: {
        mode: "dark",
      },
    }),
    []
  );

  const darkTheme = createTheme(darkThemeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
