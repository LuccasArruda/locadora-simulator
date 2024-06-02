const carrinho = [];


function escondeItensCarrinho(){
    let divItensCarrinho = document.getElementById('itens-carrinho')
    divItensCarrinho.style.visibility = 'hidden'
}

function comutarItensCarrinho(){
    let divItensCarrinho = document.getElementById('itens-carrinho')
    let itensCarrinhoVisiveis = (divItensCarrinho.style.visibility == 'visible')
    
    if (itensCarrinhoVisiveis){
        divItensCarrinho.style.visibility = 'hidden'
        return
    }
    divItensCarrinho.style.visibility = 'visible'
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
