import { merge } from "lodash";
import Link from "./Link";
import Autocomplete from "./Autocomplete";
import { Theme } from "@mui/material";

export default function componentsOverrides(theme: Theme) {
  return merge(Link(theme), Autocomplete(theme));
}
