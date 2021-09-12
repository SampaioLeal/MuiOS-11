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
  screenHeight = window.innerHeight - this.taskBarHeight;
  items = [
    {
      title: "About MuiOS 11",
      icon: Info,
      exe: "muiosver",
    },
    {
      title: "CommitZero",
      icon: Book,
      exe: "commitzero",
    },
  ];
}

const desktopStore = new DesktopStore();
export default desktopStore;
