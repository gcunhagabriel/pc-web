const botao = document.querySelector(".botao");

const imagem = document.querySelector(".imagem");

const palavras = [
  "AMENDOIM",
  "BEXIGA",
  "CACARECO",
  "DESENHO",
  "ESCARAVELHO",
  "FURTADO",
  "GIRASSOL",
  "HORIZONTE",
  "IGUARIA",
  "JANGADA",
  "KETCHUP",
  "LIMOEIRO",
  "MADRUGA",
  "NABO",
  "ORVALHO",
  "PENTELHO",
  "QUIMERA",
  "REITORIA",
  "SACOLEJO",
  "TRAMELA",
  "URUTAU",
  "VAGANTE",
  "WAFER",
  "XAXIM",
  "YAKISOBA",
  "ZANGADO",
];

const palavra = palavras[Math.trunc(Math.random() * palavras.length)].split("");

const letrasErradas = [];

const estadoAtual = [];

palavra.forEach(function () {
  estadoAtual.push("_");
});

let tentativas = 6;

const pegarElemento = (seletor) => document.querySelector(seletor);

const ehLetra = (letra) => letra.match(/[A-Z]/i);

const novoEstado = (letra, palavra, estado) => {
  let letraExiste = false;
  for (let i = 0; i < palavra.length; ++i) {
    if (letra === palavra[i]) {
      estado[i] = letra;
      letraExiste = true;
    }
  }
  if (!letraExiste && !letrasErradas.includes(letra)) {
    letrasErradas.push(letra);
    --tentativas;
  }
};

const situacaoJogo = () => {
  let venceuJogo = true;
  let i = 0;
  palavra.forEach(function () {
    if (palavra[i] !== estadoAtual[i]) {
      venceuJogo = false;
    }
    ++i;
  });
  return venceuJogo;
};

const displayEstado = (estado) => {
  estado.innerHTML = "";
  let i = 0;
  if (tentativas != 0) {
    estadoAtual.forEach(function () {
      if (estadoAtual[i] !== "_") {
        estado.innerHTML +=
          '<span class="vitoria">' + estadoAtual[i] + "</span>" + " ";
      } else {
        estado.innerHTML += estadoAtual[i] + " ";
      }
      ++i;
    });
    if (situacaoJogo()) {
      estado.innerHTML +=
        '<br>você <span class="vitoria">venceu</span> o jogo!';
    } else {
      estado.innerHTML += "<br>tentativas: " + tentativas;
    }
  } else {
    palavra.forEach(function () {
      if (palavra[i] === estadoAtual[i]) {
        estado.innerHTML +=
          '<span class="vitoria">' + estadoAtual[i] + "</span>" + " ";
      } else {
        estado.innerHTML +=
          '<span class="derrota">' + palavra[i] + "</span>" + " ";
      }
      ++i;
    });
    estado.innerHTML += '<br>você <span class="derrota">perdeu</span> o jogo!';
  }
};

const displayLetras = (letras) => {
  letras.innerHTML = "";
  let i = 0;
  if (!situacaoJogo() && tentativas != 0) {
    letrasErradas.forEach(function () {
      if (i === 0) {
        letras.innerHTML += letrasErradas[i];
      } else {
        letras.innerHTML += " - " + letrasErradas[i];
      }
      ++i;
    });
  } else {
    letras.innerHTML =
      '<a href="./index.html"><button>jogar novamente</button></a>';
  }
};

const imagemForca = () => {
  switch (tentativas) {
    case 0:
      imagem.src = "./images/tentativa0.png";
      break;
    case 1:
      imagem.src = "./images/tentativa1.png";
      break;
    case 2:
      imagem.src = "./images/tentativa2.png";
      break;
    case 3:
      imagem.src = "./images/tentativa3.png";
      break;
    case 4:
      imagem.src = "./images/tentativa4.png";
      break;
    case 5:
      imagem.src = "./images/tentativa5.png";
      break;
    case 6:
      imagem.src = "./images/tentativa6.png";
      break;
  }
};

displayEstado(estado);

const jogo = () => {
  const letra = pegarElemento(".letra").value.toUpperCase();
  const estado = pegarElemento("#estado");
  const letras = pegarElemento(".letras");
  if (ehLetra(letra)) {
    novoEstado(letra, palavra, estadoAtual);
  }
  displayEstado(estado);
  displayLetras(letras);
  imagemForca();
  pegarElemento(".letra").value = "";
  pegarElemento(".letra").focus();
};

botao.addEventListener("click", jogo);
