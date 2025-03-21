let carrinho = [];
let contadorCarrinho = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    contadorCarrinho++;
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    contadorCarrinho--;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const contador = document.getElementById('carrinho-contador');
    contador.textContent = contadorCarrinho;

    const carrinhoLista = document.getElementById('carrinho-lista');
    const total = document.getElementById('carrinho-total');
    carrinhoLista.innerHTML = '';
    let totalValor = 0;

    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerDoCarrinho(index);
        li.appendChild(botaoRemover);
        carrinhoLista.appendChild(li);
        totalValor += item.preco;
    });

    total.textContent = `Total: R$ ${totalValor.toFixed(2)}`;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra finalizada com sucesso!');
    carrinho = [];
    contadorCarrinho = 0;
    atualizarCarrinho();
    fecharCarrinho();
}

function abrirCarrinho() {
    document.getElementById('carrinho-sidebar').classList.add('aberto');
    document.getElementById('overlay').classList.add('mostrar');
}

function fecharCarrinho() {
    document.getElementById('carrinho-sidebar').classList.remove('aberto');
    document.getElementById('overlay').classList.remove('mostrar');
}

document.getElementById('carrinho-icon').addEventListener('click', abrirCarrinho);
document.getElementById('fechar-carrinho').addEventListener('click', fecharCarrinho);
document.getElementById('overlay').addEventListener('click', fecharCarrinho);