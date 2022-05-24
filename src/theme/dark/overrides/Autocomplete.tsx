import { alpha, Theme } from "@mui/material";

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        //https://github.com/mui/material-ui/issues/19692
        //with option it does not work as of now
        listbox: {
          '& .MuiAutocomplete-option[aria-selected="true"]': {
            backgroundColor: alpha(
              theme.palette.secondary.main,
              theme.palette.action.selectedOpacity
            ),
          },
          '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
            backgroundColor: alpha(
              theme.palette.secondary.main,
              theme.palette.action.selectedOpacity +
                theme.palette.action.hoverOpacity
            ),
            "@media (hover: none)": {
              backgroundColor: theme.palette.action.selected,
            },
          },
        },
      },
    },
  };
}
