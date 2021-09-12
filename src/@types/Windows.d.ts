interface IWindow {
  Executable: React.FunctionComponent<TaskProps>;
  taskId: number;
  isFocused: boolean;
  isMinimized: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
}
