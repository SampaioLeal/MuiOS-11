import Window from "../components/Window";
import { TaskProps } from "../stores/taskManager";

function CommitZero(props: TaskProps) {
  return (
    <Window width={400} height={450} title="CommitZero" taskProps={props}>
      <iframe
        src="http://commitzero.sampaioleal.dev.br"
        width="100%"
        height="100%"
        title="CommitZero"
      />
    </Window>
  );
}

export default CommitZero;
