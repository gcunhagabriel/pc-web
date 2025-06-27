const produtos = [
  { id: 1, nome: "Mouse", preco: 59.9, quantidade: 12 },
  { id: 2, nome: "Teclado", preco: 99.9, quantidade: 5 },
  { id: 3, nome: "Monitor", preco: 799.9, quantidade: 2 },
  { id: 4, nome: "Cabo HDMI", preco: 29.9, quantidade: 30 },
  { id: 5, nome: "Pen Drive", preco: 49.9, quantidade: 0 },
  { id: 6, nome: "Webcam", preco: 199.9, quantidade: 4 },
  { id: 7, nome: "SSD 240GB", preco: 299.9, quantidade: 6 },
  { id: 8, nome: "HD Externo", preco: 499.9, quantidade: 3 },
  { id: 9, nome: "Notebook", preco: 3499.9, quantidade: 1 },
  { id: 10, nome: "Suporte de Notebook", preco: 89.9, quantidade: 0 },
];

const pegarElemento = (seletor) => document.querySelector(seletor);

const botao1 = pegarElemento("#buscarProduto");
const botao2 = pegarElemento("#listarProdutos");
const botao3 = pegarElemento("#mostrarNomes");
const botao4 = pegarElemento("#calcularTotal");
const botao5 = pegarElemento("#verificarEsgotados");
const botao6 = pegarElemento("#verificarPrecos");

const resultadoBusca = pegarElemento("#resultadoBusca");
const resultado = pegarElemento("#resultado");

const buscarProduto = () => {
  resultadoBusca.innerHTML = "";

  let produtoDesejado = pegarElemento("#buscar").value;

  let produtoAchado = produtos.find(function (produto) {
    return produto.nome === produtoDesejado;
  });

  if (produtoAchado !== undefined) {
    resultadoBusca.innerHTML += "<b>ID: </b>" + produtoAchado.id + "<br>";
    resultadoBusca.innerHTML += "<b>Nome: </b>" + produtoAchado.nome + "<br>";
    resultadoBusca.innerHTML +=
      "<b>Preço: </b>R$" + produtoAchado.preco.toFixed(2) + "<br>";
    resultadoBusca.innerHTML +=
      "<b>Quantidade: </b>" + produtoAchado.quantidade;
  } else {
    resultadoBusca.innerHTML = "<b>Produto não encontrado</b>";
  }
};

const listarProdutos = () => {
  resultado.innerHTML = "";

  produtos.forEach(function (produto) {
    resultado.innerHTML += "<b>Nome: </b>" + produto.nome + "<br>";
    resultado.innerHTML +=
      "<b>Preço: </b>R$" + produto.preco.toFixed(2) + "<br>";
    resultado.innerHTML +=
      "<b>Quantidade: </b>" + produto.quantidade + "<br><br>";
  });
};

const mostrarNomes = () => {
  resultado.innerHTML = "";
  resultado.innerHTML += "<b>Nomes dos produtos:</b><br><br>";

  let nomesProdutos = produtos.map(function (produto) {
    return produto.nome;
  });

  nomesProdutos.forEach(function (produto) {
    resultado.innerHTML += produto + "<br>";
  });
};

const calcularTotal = () => {
  resultado.innerHTML = "";

  let soma = produtos.reduce(function (soma, produto) {
    return soma + produto.quantidade * produto.preco;
  }, 0);

  resultado.innerHTML += "<b>Valor total do estoque: </b>R$" + soma.toFixed(2);
};

const verificarEsgotados = () => {
  resultado.innerHTML = "";

  let esgotado = produtos.some(function (produto) {
    return produto.quantidade === 0;
  });

  if (esgotado) {
    resultado.innerHTML += "<b>Há um produto com quantidade esgotada</b>";
  } else {
    resultado.innerHTML +=
      "<b>Não há nenhum produto com quantidade esgotada</b>";
  }
};

const verificarPrecos = () => {
  resultado.innerHTML = "";

  let precoJusto = produtos.every(function (produto) {
    return produto.preco > 10;
  });

  if (precoJusto) {
    resultado.innerHTML += "<b>Todos os produtos têm preço justo</b>";
  } else {
    resultado.innerHTML += "<b>Há produtos com preço muito baixo</b>";
  }
};

botao1.addEventListener("click", buscarProduto);
botao2.addEventListener("click", listarProdutos);
botao3.addEventListener("click", mostrarNomes);
botao4.addEventListener("click", calcularTotal);
botao5.addEventListener("click", verificarEsgotados);
botao6.addEventListener("click", verificarPrecos);