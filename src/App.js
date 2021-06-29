import logo from "./logo.svg";
import "./App.css";

import Developer from "./components/Developer";

function App() {
  const Devs = {
    Dev1: { nome: "Gabriel", idade: 19, pais: "Brasil" },
    Dev2: { nome: "Felipe", idade: 28, pais: "Brasil" },
    Dev3: { nome: "Maria", idade: 24, pais: "Italia" },
  };
  return (
    <div className="App">
      <header className="App-header">
        <Developer
          nome={Devs.Dev1.nome}
          idade={Devs.Dev1.idade}
          pais={Devs.Dev1.pais}
        />
        <Developer
          nome={Devs.Dev2.nome}
          idade={Devs.Dev2.idade}
          pais={Devs.Dev2.pais}
        />
        <Developer
          nome={Devs.Dev3.nome}
          idade={Devs.Dev3.idade}
          pais={Devs.Dev3.pais}
        />
      </header>
    </div>
  );
}

export default App;
