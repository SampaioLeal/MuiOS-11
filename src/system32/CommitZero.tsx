import Window from "../components/Window";

function CommitZero(props: TaskProps) {
  return (
    <Window title="CommitZero" {...props}>
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
