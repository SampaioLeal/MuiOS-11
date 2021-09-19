import { Book, Info } from "@mui/icons-material";
import AboutSystem from "./AboutSystem";
import Portfolio from "./Portfolio";

export const sysExecutables: { [key: string]: Executable } = {
  muiosver: {
    title: "About MuiOS 11",
    signleInstance: true,
    isResizable: false,
    exe: AboutSystem,
    icon: Info,
    defaultSize: {
      width: 400,
      height: 450,
    },
  },
  portfolio: {
    title: "My Portfolio",
    exe: Portfolio,
    icon: Book,
    defaultSize: {
      width: 700,
      height: 500,
    },
  },
};
