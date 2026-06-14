// Um pouquinho de interatividade: troca a mensagem ao clicar no botão

const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

const frases = [
  "Funcionou! 🎉",
  "Você está programando! 💻",
  "Mais um clique! 👆",
  "Bora pro GitHub! 🚀",
];

let contador = 0;

botao.addEventListener("click", () => {
  mensagem.textContent = frases[contador % frases.length];
  contador++;
});
