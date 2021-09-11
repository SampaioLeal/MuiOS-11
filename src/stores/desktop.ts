import { makeAutoObservable } from "mobx";

class DesktopStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  isMenuOpen = false;
  openMenu() {
    this.isMenuOpen = true;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}

const desktopStore = new DesktopStore();
export default desktopStore;
