const itens = [
  {
    id: 1,
    nome: "Café Espresso",
    valor: 8.0,
    img: "https://static.vecteezy.com/system/resources/previews/023/438/448/original/espresso-coffee-cutout-free-png.png",
  },
  {
    id: 2,
    nome: "Capuccino",
    valor: 12.0,
    img: "https://static.vecteezy.com/system/resources/previews/023/522/886/non_2x/cappuccino-coffee-cup-cutout-free-png.png",
  },
  {
    id: 3,
    nome: "Suco de Laranja",
    valor: 10.0,
    img: "https://th.bing.com/th/id/R.9d3d3f8f6c1db4d767bb214c6e04afe5?rik=6SDsZe2sMyHT9Q&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    nome: "Água Mineral",
    valor: 6.0,
    img: "https://th.bing.com/th/id/R.933bdf55dd099ab87813619f63a190b0?rik=UFV%2bnarXdS8GJA&riu=http%3a%2f%2fwww.freepngclipart.com%2fdownload%2fframe%2f57561-water-bottled-mineral-fizzy-drinks-free-frame.png&ehk=x40ytFks0F%2fYjDzjB%2bW3tbZgmpZ04xHW7ml%2fv0Bo9k4%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 5,
    nome: "Fatia de Bolo",
    valor: 12.0,
    img: "https://png.pngtree.com/png-clipart/20230429/original/pngtree-cake-chocolate-cut-png-image_9120780.png",
  },
  {
    id: 6,
    nome: "Sanduíche Natural",
    valor: 12.0,
    img: "https://png.pngtree.com/png-clipart/20210418/original/pngtree-sandwich-nutrition-sandwich-png-image_6241054.jpg",
  },
  {
    id: 7,
    nome: "Croissant",
    valor: 17.0,
    img: "https://pngimg.com/uploads/croissant/croissant_PNG46671.png",
  },
];

const cardapio = document.querySelector("#cardapio");
const carrinho = document.querySelector("#carrinho");

const carregaCardapio = function () {
  itens.forEach((item) => {
    let caixaItem = document.createElement("div");
    let nomeItem = document.createElement("h3");
    let valorItem = document.createElement("p");
    let imgItem = document.createElement("img");
    let botaoItem = document.createElement("button");

    nomeItem.textContent = item.nome;
    valorItem.textContent = "R$ " + item.valor;
    imgItem.src = item.img;
    botaoItem.textContent = "Adicionar";

    botaoItem.id = "botaoItem" + item.id;
    botaoItem.className = "botaoItem";

    caixaItem.appendChild(nomeItem);
    caixaItem.appendChild(valorItem);
    caixaItem.appendChild(imgItem);
    caixaItem.appendChild(botaoItem);

    cardapio.appendChild(caixaItem);
  });
};

carregaCardapio();

const carregaCarrinho = function () {
  let valorTotal = 0;
  carrinho.innerHTML = "";
  const tituloCar = document.createElement("h2");
  tituloCar.textContent = "Carrinho";
  carrinho.appendChild(tituloCar);

  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i);

    if (!chave.startsWith("item")) continue;

    const valorArmazenado = localStorage.getItem(chave);
    if (!valorArmazenado) continue;

    const [nome, valor] = valorArmazenado.split("#");

    let caixaCarItem = document.createElement("div");
    let nomeCarItem = document.createElement("h3");
    let valorCarItem = document.createElement("p");
    let removerItem = document.createElement("button");
    valorTotal += parseFloat(valor);

    nomeCarItem.textContent = nome;
    valorCarItem.textContent = "R$ " + parseFloat(valor);
    removerItem.textContent = "Remover";
    removerItem.id = chave;
    removerItem.className = "removerItem";

    removerItem.addEventListener("click", () => {
      localStorage.removeItem(chave);
      carregaCarrinho();
    });

    caixaCarItem.appendChild(nomeCarItem);
    caixaCarItem.appendChild(valorCarItem);
    caixaCarItem.appendChild(removerItem);

    carrinho.appendChild(caixaCarItem);
  }

  let valorCarTotal = document.createElement("p");
  valorCarTotal.textContent = "Total: R$ " + valorTotal;
  carrinho.appendChild(valorCarTotal);
};

carregaCarrinho();

const botoesAdicionar = document.querySelectorAll(".botaoItem");

botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    let id = parseInt(botao.id.replace("botaoItem", "")) - 1;
    let numeroEstoque = localStorage.length + 1;
    localStorage.setItem(
      "item" + numeroEstoque,
      itens[id].nome + "#" + itens[id].valor
    );
    carregaCarrinho();
  });
});

const botoesRemover = document.querySelectorAll(".removerItem");
