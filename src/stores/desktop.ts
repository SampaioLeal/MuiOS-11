import { Book, Info } from "@mui/icons-material";
import { makeAutoObservable } from "mobx";

type IconSize = "inherit" | "large" | "medium" | "small";

class DesktopStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  taskBarIconSize: IconSize = "medium";
  taskBarHeight = 40;
  topBarHeight = 32;
  desktopHeight = window.innerHeight - this.taskBarHeight;
  desktopWidth = window.innerWidth;
  items = [
    {
      title: "About MuiOS 11",
      icon: Info,
      exe: "muiosver",
    },
    {
      title: "My Portfolio",
      icon: Book,
      exe: "portfolio",
    },
  ];
}

const desktopStore = new DesktopStore();
export default desktopStore;
