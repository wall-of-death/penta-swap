import { themes } from "@/constant/themes";
import { atom } from "recoil";
import { Theme, ThemeList } from "./types";

export const globalThemeState = atom<Theme>({
  key: "themeState",
  default: "light",
});

export const themeListState = atom<ThemeList>({
  key: "themeListState",
  default: themes,
});
