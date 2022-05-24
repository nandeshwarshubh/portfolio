import { Theme } from "@mui/material";
import { alpha } from "@mui/system";

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          "&.MuiLink-root": {
            color: "#0288D1",
            textDecorationColor: alpha("#0288D1", 0.4),
            "&:hover": {
              textDecorationColor: "inherit",
            },
          },
          "&.MuiLink-underlineNone": {
            color: "#0288D1",
          },
          "&.MuiLink-underlineHover": {
            color: "#0288D1",
          },
          "&.MuiLink-underlineAlways": {
            color: "#0288D1",
          },
          "&.MuiLink-button": {
            color: "#0288D1",
          },
          "&.Mui-focusVisible": {
            color: "#0288D1",
          },
        },
      },
    },
  };
}
