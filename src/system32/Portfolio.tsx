import Window from "../components/Window";

function Portfolio(props: TaskProps) {
  return (
    <Window title="My Portfolio" {...props}>
      <iframe
        src="https://sampaioleal.dev.br"
        width="100%"
        height="100%"
        title="My Portfolio"
      />
    </Window>
  );
}

export default Portfolio;
