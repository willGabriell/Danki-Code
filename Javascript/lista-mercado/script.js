const itens = [];
const buttom = document.querySelector('.buttom')

buttom.addEventListener('click', () => {
    var nomeProduto = document.querySelector('.name')
    var ValorProduto = document.querySelector('.value')
    
    itens.push({
        nome: nomeProduto.value,
        valor: ValorProduto.value,
    })

    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML = '';
    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+= `
        <div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price"><span> R$ `+val.valor+`</span></h3>
        </div>
        `
    })

    soma = soma.toFixed(2)
    nomeProduto.value = '';
    ValorProduto.value = '';

    let elementoSoma = document.querySelector('.soma-produto h1')
    elementoSoma.innerHTML =  'Total R$ '+soma;

})


/*

*/ 
