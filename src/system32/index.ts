import { Book, Info } from "@mui/icons-material";
import AboutSystem from "./AboutSystem";
import CommitZero from "./CommitZero";

export const sysExecutables: { [key: string]: Executable } = {
  muiosver: {
    signleInstance: true,
    isResizable: false,
    exe: AboutSystem,
    icon: Info,
    defaultSize: {
      width: 400,
      height: 450,
    },
  },
  commitzero: {
    signleInstance: true,
    exe: CommitZero,
    icon: Book,
    defaultSize: {
      width: 700,
      height: 500,
    },
  },
};
