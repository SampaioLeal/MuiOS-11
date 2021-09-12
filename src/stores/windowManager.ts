import { makeAutoObservable } from "mobx";
import desktopStore from "./desktop";

class WindowManager {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  windows: Map<number, IWindow> = new Map();
  focusedId = 0;

  get list() {
    return Array.from(this.windows.values());
  }

  get nonFocused() {
    return Array.from(this.windows.values()).filter(
      (window) => !window.isFocused && !window.isMinimized
    );
  }

  get focused() {
    return this.windows.get(this.focusedId);
  }

  register(executable: Executable, id: number) {
    this.windows.set(id, {
      Executable: executable.exe,
      taskId: id,
      isFocused: true,
      isMinimized: false,
      width: executable.defaultSize.width,
      height: executable.defaultSize.height,
      x: window.innerWidth / 2 - executable.defaultSize.width / 2,
      y: desktopStore.desktopHeight / 2 - executable.defaultSize.height / 2,
    });

    this.setFocus(id);
  }

  unregister(id: number) {
    this.windows.delete(id);
  }

  toggleVisibility(id: number) {
    const window = this.windows.get(id);

    if (window) {
      if (window.isMinimized) {
        window.isMinimized = false;
        window.isFocused = true;
        this.focusedId = id;
      } else {
        window.isMinimized = true;
        window.isFocused = false;
        this.focusedId = 0;
      }
    }
  }

  setFocus(id: number) {
    this.windows.forEach((window) => {
      if (window.taskId === id) window.isFocused = true;
      else window.isFocused = false;
    });
    this.focusedId = id;
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
