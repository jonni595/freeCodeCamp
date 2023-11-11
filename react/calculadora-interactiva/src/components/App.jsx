import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import ClearButton from "./ClearButton";
import Button from "./Button";
import Screen from "./Screen";
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calc = () => {
    if (input) {
      setInput(evaluate);
    } else {
      alert('Ingrese valores para realizar el calculo')
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Screen input={input} />
        <div className="fila">
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button manejarClic={calc}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButton manejarClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
