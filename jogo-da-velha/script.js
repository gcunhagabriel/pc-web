const pegarElemento = (seletor) => document.querySelector(seletor);

const botao = pegarElemento("#botao");

const situacao = pegarElemento("#situacao");

const vitoria = pegarElemento("#vitoria");

const tabela = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

const casaValida = (linha, coluna) =>
  linha >= 0 && linha <= 2 && coluna >= 0 && coluna <= 2 ? true : false;

const casaVazia = (linha, coluna) =>
  tabela[linha][coluna] === " " ? true : false;

const numeroAleatorio = () => Math.trunc(Math.random() * 3);

const jogadaRobo = () => {
  let linha = numeroAleatorio();
  let coluna = numeroAleatorio();
  while (!casaVazia(linha, coluna)) {
    linha = numeroAleatorio();
    coluna = numeroAleatorio();
  }
  tabela[linha][coluna] = "O";
};

const mostrarTabela = () => {
  situacao.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      situacao.innerHTML += "[" + tabela[i][j] + "]";
    }
    situacao.innerHTML += "<br>";
  }
};

const ehVitoria = () => {
  for (let i = 0; i < 3; i++) {
    if (
      tabela[i][0] !== " " &&
      tabela[i][0] === tabela[i][1] &&
      tabela[i][1] === tabela[i][2]
    ) {
      return tabela[i][0];
    }

    if (
      tabela[0][i] !== " " &&
      tabela[0][i] === tabela[1][i] &&
      tabela[1][i] === tabela[2][i]
    ) {
      return tabela[0][i];
    }
  }

  if (
    tabela[0][0] !== " " &&
    tabela[0][0] === tabela[1][1] &&
    tabela[1][1] === tabela[2][2]
  ) {
    return tabela[0][0];
  }

  if (
    tabela[0][2] !== " " &&
    tabela[0][2] === tabela[1][1] &&
    tabela[1][1] === tabela[2][0]
  ) {
    return tabela[0][2];
  }

  return null;
};

const deuVelha = () => {
  if (ehVitoria() !== null) {
    return false;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tabela[i][j] === " ") {
        return false;
      }
    }
  }
  return true;
};

const registrarVitoria = (simbolo) => {
  if (simbolo === "X") vitoria.innerHTML = "<p>Vitória</p>";
  else vitoria.innerHTML = "<p>Derrota</p>";
  vitoria.innerHTML += '<a href="./index.html">Jogar novamente</a>';
};

const jogada = () => {
  const linha = Number(document.querySelector("#linha").value);
  const coluna = Number(document.querySelector("#coluna").value);
  if (casaValida(linha, coluna) && casaVazia(linha, coluna)) {
    tabela[linha][coluna] = "X";
    const vencedorJogador = ehVitoria();
    if (vencedorJogador !== null) {
      registrarVitoria(vencedorJogador);
      mostrarTabela();
      return;
    }
    if (deuVelha()) {
      vitoria.innerHTML = "<p>Empate</p>";
      vitoria.innerHTML += '<a href="./index.html">Jogar novamente</a>';
      mostrarTabela();
      return;
    }
    jogadaRobo();
    const vencedorRobo = ehVitoria();
    if (vencedorRobo !== null) {
      registrarVitoria(vencedorRobo);
      mostrarTabela();
      return;
    }
    mostrarTabela();
  }
};

botao.addEventListener("click", jogada);
