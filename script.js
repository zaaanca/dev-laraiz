let carrinho = [];
let contadorCarrinho = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    contadorCarrinho++;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const contador = document.getElementById('carrinho-contador');
    contador.textContent = contadorCarrinho;
}

function exibirCarrinho() {
    alert(`Itens no carrinho:\n${carrinho.map(item => `${item.nome} - R$ ${item.preco.toFixed(2)}`).join('\n')}`);
}

document.getElementById('carrinho-icon').addEventListener('click', exibirCarrinho);