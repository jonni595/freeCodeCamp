const button = document.querySelector("button");
const color = document.getElementById("color");

const generateRandomColor = () => {
  let digit = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let element = Math.floor(Math.random() * 16);
    colorHex += digit[element];
  }

  return colorHex;
};

button.addEventListener("click", () => {
  let randomColor = generateRandomColor();
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});
