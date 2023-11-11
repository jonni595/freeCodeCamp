import "../css/style.css";
import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import Boton from "./Boton";
import Contador from "./Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClis] = useState(0);

  const manejarClic = () => {
    setNumClis(numClics + 1);
  };
  const reniciarContador = () => {
    setNumClis(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto={"Clic"} esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto={"Reiniciar"}
          esBotonDeClic={false}
          manejarClic={reniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
