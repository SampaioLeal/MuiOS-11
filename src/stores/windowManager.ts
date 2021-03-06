import { makeAutoObservable } from "mobx";
import desktopStore from "./desktop";

class WindowManager {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  windows: Map<number, IWindow> = new Map();
  focusOrder: number[] = [];

  get list() {
    return Array.from(this.windows.values());
  }

  getFocusOrder(taskId: number) {
    return this.focusOrder.findIndex((id) => taskId === id);
  }

  register(executable: Executable, id: number) {
    this.windows.set(id, {
      Executable: executable.exe,
      taskId: id,
      isFocused: true,
      isMinimized: false,
      isResizable: executable.isResizable,
      width: executable.defaultSize.width,
      height: executable.defaultSize.height,
      x: window.innerWidth / 2 - executable.defaultSize.width / 2,
      y: desktopStore.desktopHeight / 2 - executable.defaultSize.height / 2,
    });

    this.setFocus(id);
  }

  unregister(id: number) {
    this.toggleVisibility(id);
    this.windows.delete(id);
  }

  toggleVisibility(id: number) {
    const focusedWindow = this.focusOrder[this.focusOrder.length - 1];
    const isFocused = focusedWindow === id;
    const window = this.windows.get(id);

    if (window) {
      if (window.isMinimized) {
        window.isMinimized = false;
        window.isFocused = true;
        this.setFocus(id);
      } else {
        if (isFocused) {
          window.isMinimized = true;
          window.isFocused = false;
          this.removeFocus(id);
        } else {
          this.setFocus(id);
        }
      }
    }
  }

  maximize(taskId: number) {
    const window = this.windows.get(taskId);

    if (window) {
      window.height = desktopStore.desktopHeight;
      window.width = desktopStore.desktopWidth;
      window.x = 0;
      window.y = 0;
    }
  }

  setFocus(id: number) {
    const actualIndex = this.focusOrder.findIndex((taskId) => taskId === id);

    if (this.focusOrder.length && actualIndex === this.focusOrder.length - 1)
      return;

    this.windows.forEach((window) => {
      if (window.taskId === id) window.isFocused = true;
      else window.isFocused = false;
    });

    if (actualIndex > -1) this.focusOrder.splice(actualIndex, 1);
    this.focusOrder.push(id);
  }

  removeFocus(id: number) {
    const actualIndex = this.focusOrder.findIndex((taskId) => taskId === id);
    this.focusOrder.splice(actualIndex, 1);
  }

  setPosition(id: number, x: number, y: number) {
    const window = this.windows.get(id);

    if (window) {
      window.x = x;
      window.y = y;
    }
  }

  setSize(id: number, width: number, height: number) {
    const window = this.windows.get(id);

    if (window) {
      window.width = width;
      window.height = height;
    }
  }
}

const windowManager = new WindowManager();
export default windowManager;
