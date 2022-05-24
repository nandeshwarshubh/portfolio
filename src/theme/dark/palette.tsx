import { alpha } from "@mui/material/styles";

const TEXT = {
  primary: alpha("#000000", 0.87),
  secondary: alpha("#000000", 0.6),
  disabled: alpha("#000000", 0.38),
};

const PRIMARY = {
  main: "#C20000",
  dark: "#9E0000",
  light: "#CE3333",
  contrastText: "#FFFFFF",
  main_4: alpha("#C20000", 0.04),
  main_8: alpha("#C20000", 0.08),
  main_12: alpha("#C20000", 0.12),
  main_30: alpha("#C20000", 0.3),
  main_50: alpha("#C20000", 0.5),
};

const SECONDARY = {
  main: "#262626",
  dark: "#000000",
  light: "#555555",
  contrastText: "#FFFFFF",
  main_4: alpha("#262626", 0.04),
  main_30: alpha("#262626", 0.3),
};

const ACTION = {
  active: alpha("#000000", 0.54),
  hover: alpha("#000000", 0.04),
  selected: alpha("#000000", 0.08),
  disabled: alpha("#000000", 0.26),
  disabledBackground: alpha("#000000", 0.12),
  focus: alpha("#000000", 0.12),
  active_3: alpha("#000000", 0.3),
};

const ERROR = {
  main: "#F60E06",
  dark: "#D10000",
  contrastText: "#FFFFFF",
  main_4: alpha("#F60E06", 0.04),
  main_30: alpha("#F60E06", 0.3),
  main_160: "#610602",
  main_190: "fee7e5",
};

const WARNING = {
  main: "#FF9F00",
  dark: "#FF6C03",
  contrastText: "#FFFFFF",
  main_4: alpha("#FF9F00", 0.04),
  main_30: alpha("#FF9F00", 0.3),
};

const INFO = {
  main: "#0288D1",
  dark: "#01579B",
  contrastText: "#FFFFFF",
  main_4: alpha("#0288D1", 0.04),
  main_30: alpha("#0288D1", 0.3),
};

const SUCCESS = {
  main: "#2E7D32",
  dark: "#1B5E20",
  contrastText: "#FFFFFF",
  main_4: alpha("#2E7D32", 0.04),
  main_30: alpha("#2E7D32", 0.3),
};

const BACKGROUND = {
  paper: "#FFFFFF",
};

const COMMON = {
  black: "#000000",
  white: "#FFFFFF",
};

const GREY = {
  400: "#BDBDBD",
  600: "#757575",
  700: "#616161",
};

const palette = {
  text: { ...TEXT },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  action: { ...ACTION },
  error: { ...ERROR },
  warning: { ...WARNING },
  info: { ...INFO },
  success: { ...SUCCESS },
  background: { ...BACKGROUND },
  divider: alpha("#000000", 0.12),
  common: { ...COMMON },
  grey: { ...GREY },
};

export default palette;
