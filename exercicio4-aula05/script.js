const quadrado = document.getElementById("quadrado");
const botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  const corAleatoria = "#" + Math.floor(Math.random()*16777215).toString(16);
  quadrado.style.backgroundColor = corAleatoria;
});
