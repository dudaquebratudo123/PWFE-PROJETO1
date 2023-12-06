function venda(){
    //pegando os valores inseridos no input
    let modelo = document.getElementById("modelo").value;
    let preco = document.getElementById("preco").value;
    let entrada = document.getElementById("entrada").value;
    let parcela = document.getElementById("parcela").value;
    //calculando o valor das parcelas
    valorParaParcelar = preco - entrada;
    valorParcelas = (valorParaParcelar/parcela);
    let juros = valorParcelas + valorParcelas*0.10;
    //exibindo
    document.getElementById("resultado").innerHTML = ("<b>Modelo: " + modelo
    + "<br>Preço: " + preco + "<br>Parcelas: " + parcela + "x de R$ " + juros);
}