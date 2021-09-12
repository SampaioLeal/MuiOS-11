import { makeAutoObservable } from "mobx";
import { FunctionComponent } from "react";
import { Executable, sysExecutables } from "../system32";

export interface Task extends Executable {
  id: number;
  exe: FunctionComponent<TaskProps>;
  program: string;
  isMinimized: boolean;
  isFocused: boolean;
}

export interface TaskProps {
  handleClose(): void;
}

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

  get activeTasks() {
    return Array.from(this.tasks.values()).filter((task) => !task.isMinimized);
  }

  open(program: string) {
    const id = this.lastId + 1;
    const executable = sysExecutables[program];
    const hasTasksOpen = !!this.getByProgram(program).length;

    if (executable.signleInstance && hasTasksOpen) return;

    this.tasks.forEach((task) => {
      task.isFocused = false;
    });

    this.tasks.set(id, {
      id,
      isMinimized: false,
      isFocused: true,
      program,
      ...executable,
    });
  }

  close(id: number) {
    this.tasks.delete(id);
  }

  toggleVisibility(id: number) {
    const task = this.tasks.get(id);

    if (task) {
      task.isMinimized = !task.isMinimized;

      if (task.isFocused) {
        task.isFocused = false;
      }
    }
  }
}

const taskManager = new TaskManager();
export default taskManager;
