
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