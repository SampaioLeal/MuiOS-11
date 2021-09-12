import Window from "../components/Window";

function CommitZero(props: TaskProps) {
  return (
    <Window width={400} height={450} title="CommitZero" {...props}>
      <iframe
        src="https://commitzero.sampaioleal.dev.br"
        width="100%"
        height="100%"
        title="CommitZero"
      />
    </Window>
  );
}

export default CommitZero;
