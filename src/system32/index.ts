import { Book, Info } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FunctionComponent } from "react";
import { TaskProps } from "../stores/taskManager";
import AboutSystem from "./AboutSystem";
import CommitZero from "./CommitZero";

export interface Executable {
  signleInstance: boolean;
  exe: FunctionComponent<TaskProps>;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const sysExecutables: { [key: string]: Executable } = {
  muiosver: { signleInstance: true, exe: AboutSystem, icon: Info },
  commitzero: { signleInstance: true, exe: CommitZero, icon: Book },
};
