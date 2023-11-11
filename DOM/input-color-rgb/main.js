const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

const updateColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
};

inputRojo.addEventListener("change", (e) => {
  let rojo = e.target.value;
  textoRojo.innerText = rojo;
  updateColor(rojo, verde, azul);
});

inputVerde.addEventListener("change", (e) => {
  let verde = e.target.value;
  textoVerde.innerText = verde;
  updateColor(rojo, verde, azul);
});

inputAzul.addEventListener("change", (e) => {
  let azul = e.target.value;
  textoAzul.innerText = azul;
  updateColor(rojo, verde, azul);
});
