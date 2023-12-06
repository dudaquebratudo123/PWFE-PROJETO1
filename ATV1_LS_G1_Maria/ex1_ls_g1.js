function obterCarros(){
    //objeto JSON recebe todos os dados do usuário 
    return JSON.parse(localStorage.getItem('veiculos')) || [];
}

function salvarDadosVeiculos(lista){
    //converte para string
    localStorage.setItem('veiculos', JSON.stringify(lista));
}

let listaVeiculos = obterCarros();


function adicionar(){
    //pegando os valores inseridos no input
    let modelo = document.getElementById("modelo").value;
    let preco = document.getElementById("preco").value;
    let entrada = document.getElementById("entrada").value;
    let parcela = document.getElementById("parcela").value;

    if (modelo && preco && entrada && parcela){
        //calculando o valor das parcelas
        valorParaParcelar = preco - entrada;
        valorParcelas = (valorParaParcelar/parcela);
        juros = valorParcelas + valorParcelas*0.10;
        listaVeiculos.push({modelo, preco, entrada, parcela, juros});
        salvarDadosVeiculos(listaVeiculos);
        limparCampos();
    }
}

function venda(){
    let lista = "";
    for(i = 0; i < listaVeiculos.length; i++){
        lista += "MODELO: " + listaVeiculos[i].modelo + "  R$: " + listaVeiculos[i].preco 
        + " PARCELAS: " + listaVeiculos[i].parcela + "x de R$ " + listaVeiculos[i].juros + "<br>";
    }
    document.getElementById("resultado").innerHTML = lista; 
}

function limparCampos(){
    modelo = document.getElementById("modelo").value = "";
    preco = document.getElementById("preco").value = "";
    entrada = document.getElementById("entrada").value = "";
    parcela = document.getElementById("parcela").value = "";
}
