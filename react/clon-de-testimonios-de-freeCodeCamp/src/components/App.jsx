import "../css/style.css";
import Testimonio from "./Testimonio";
import {nombresCompletos, paisOrigen, imagenes, imagenAlt, cargos, empresas, testimonios} from '../js/students'

function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre={`${nombresCompletos[0]}`}
          pais={`${paisOrigen[0]}`}
          imagen={`${imagenes[0]}`}
          alternativo={`${imagenAlt[0]}`}
          cargo={`${cargos[0]}`}
          empresa={`${empresas[0]}`}
          testimonio={`${testimonios[0]}`}
        />
        <Testimonio
          nombre={`${nombresCompletos[1]}`}
          pais={`${paisOrigen[1]}`}
          imagen={`${imagenes[1]}`}
          alternativo={`${imagenAlt[1]}`}
          cargo={`${cargos[1]}`}
          empresa={`${empresas[1]}`}
          testimonio={`${testimonios[1]}`}
        />
        <Testimonio
          nombre={`${nombresCompletos[2]}`}
          pais={`${paisOrigen[2]}`}
          imagen={`${imagenes[2]}`}
          alternativo={`${imagenAlt[2]}`}
          cargo={`${cargos[2]}`}
          empresa={`${empresas[2]}`}
          testimonio={`${testimonios[2]}`}
        />
      </div>
    </div>
  );
}

export default App;
