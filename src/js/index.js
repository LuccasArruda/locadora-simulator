
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

function adicionarItemCarrinho(){
    let divItensCarrinho = document.getElementById('lista-itens-alugados')
    let itemAlugado = retornaTagItemAlugado()
    let precoItemAlugado = retornaTagPrecoItem()

    somaPrecoAlugado(30)
    itemAlugado.appendChild(precoItemAlugado)
    divItensCarrinho.appendChild(itemAlugado)
}

function retornaTagItemAlugado(){
    let itemAlugado = document.createElement('li')
    itemAlugado.innerHTML = 'The Batman'
    itemAlugado.style.fontSize = '20px'
    itemAlugado.style.color = '#effef7'
    return itemAlugado
}

function retornaTagPrecoItem(){
    let precoItemAlugado = document.createElement('span')
    precoItemAlugado.innerHTML = ' R$ 30,00'
    precoItemAlugado.style.fontSize = '20px'
    precoItemAlugado.style.color = '#0fa968'
    return precoItemAlugado
}

function somaPrecoAlugado(precoItem){
    let tagPrecoAlugados = document.getElementById('total-itens-alugados')
    let precoAlugados = parseFloat(tagPrecoAlugados.textContent)
    let tagDivTotais = document.getElementById('totais')
    
    precoAlugados += precoItem
    console.log(precoAlugados)
    tagPrecoAlugados.innerHTML = precoAlugados

    if (precoAlugados > 0){
        tagDivTotais.visibility = 'visible'
        return
    }

    tagDivTotais.visibility = 'hidden'
}
