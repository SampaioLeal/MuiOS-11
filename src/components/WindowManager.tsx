import { observer } from "mobx-react-lite";
import windowManager from "../stores/windowManager";

function WindowManager() {
  return (
    <>
      {windowManager.active.map((window) => {
        const { Executable, taskId } = window;

        return <Executable key={`program-${taskId}`} window={window} />;
      })}
    </>
  );
}

export default observer(WindowManager);
