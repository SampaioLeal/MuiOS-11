import { makeAutoObservable } from "mobx";
import { sysExecutables } from "../system32";
import windowManager from "./windowManager";

class TaskManager {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  lastId = 0;
  tasks: Map<number, Task> = new Map();

  get allTasks() {
    return Array.from(this.tasks.values());
  }

  getByProgram(program: string) {
    return Array.from(this.tasks.values()).filter(
      (task) => task.program === program
    );
  }

  open(program: string) {
    const id = this.lastId + 1;
    const executable = sysExecutables[program];
    const hasTasksOpen = !!this.getByProgram(program).length;

    if (executable.signleInstance && hasTasksOpen) return;

    this.tasks.set(id, {
      id,
      program,
      ...executable,
    });
    this.lastId = id;

    windowManager.register(executable, id);
  }

  close(id: number) {
    windowManager.unregister(id);
    this.tasks.delete(id);
  }
}

const taskManager = new TaskManager();
export default taskManager;
