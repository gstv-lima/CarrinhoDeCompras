let totalGeralCarrinho = 0;


function adicionar(){
    //Recupera valores - nome do produto - quantidade e valor;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valUnidade = parseFloat(produto.split('R$')[1]);
    let qntd = document.getElementById('quantidade').value;
    
    //Calcula o preço e mostra produto no carrinho;
    let preço = qntd * valUnidade;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${qntd}x</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`;

    //Calcula valor total dos produtos no carrinho;
    totalGeralCarrinho = totalGeralCarrinho + preço;
    
    valorTotal = document.getElementById('valor-total');
    valorTotal.innerText = `R$${totalGeralCarrinho.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    qntd = document.getElementById('quantidade').value = '';
}

function limpar(){
    totalGeralCarrinho = 0;
    valorTotal.innerText = '';
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul"></span><span class="texto-azul"></span>
        </section>`;
}