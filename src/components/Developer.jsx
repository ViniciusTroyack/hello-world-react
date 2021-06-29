import "./styles.css";

function Developer({ nome, idade, pais }) {
  return (
    <div className="Infos">
      <h3>Dev: {nome}</h3>
      <h3>Idade: {idade}</h3>
      <h3>Pais: {pais}</h3>
    </div>
  );
}

export default Developer;
