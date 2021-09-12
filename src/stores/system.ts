import { Theme } from "@mui/material";
import { makeAutoObservable } from "mobx";
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

type IThemes = "light" | "dark";
type IThemesObject = {
  [key in IThemes]: Theme;
};

class SystemStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  themes: IThemesObject = {
    light: lightTheme,
    dark: darkTheme,
  };
  theme: IThemes = "dark";
  getTheme() {
    return this.themes[this.theme];
  }
  toggleTheme() {
    if (this.theme === "light") {
      this.theme = "dark";
    } else {
      this.theme = "light";
    }
  }

  isMenuOpen = false;
  openMenu() {
    this.isMenuOpen = true;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  get screenWidth() {
    return window.innerWidth;
  }
  get screenHeight() {
    return window.innerHeight;
  }
}

const systemStore = new SystemStore();
export default systemStore;
