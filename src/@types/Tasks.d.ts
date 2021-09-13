interface Executable {
  signleInstance?: boolean;
  isResizable?: boolean;
  exe: FunctionComponent<TaskProps>;
  icon: import("@mui/material").OverridableComponent<
    import("@mui/material").SvgIconTypeMap<{}, "svg">
  >;
  defaultSize: {
    width: number;
    height: number;
  };
}

interface Task extends Executable {
  id: number;
  exe: FunctionComponent<TaskProps>;
  program: string;
}

interface TaskProps {
  window: IWindow;
  handleClose(): void;
}
