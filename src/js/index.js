const carrinho = [];

function escondeItensCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    itensCarrinho.style.display = 'none';
}

function comutarItensCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    if (itensCarrinho.style.display === 'none' || itensCarrinho.style.display === '') {
        itensCarrinho.style.display = 'block';
        mostrarItensCarrinho();
    } else {
        itensCarrinho.style.display = 'none';
    }
}

function adicionarItemCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    mostrarItensCarrinho();
}

function mostrarItensCarrinho() {
    const listaItens = document.getElementById('lista-itens-alugados');
    const totalItens = document.getElementById('total-itens-alugados');
    listaItens.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco}`;
        listaItens.appendChild(li);
        total += item.preco;
    });

    totalItens.textContent = total;
}

document.addEventListener('DOMContentLoaded', () => {
    escondeItensCarrinho();
});
