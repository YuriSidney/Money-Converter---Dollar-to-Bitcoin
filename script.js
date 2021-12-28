function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmBitcoin = valorEmDolarNumerico * 0.021;
  console.log(valorEmBitcoin);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "The result in Bitcoin is ₿ " + valorEmBitcoin;
  elementoValorConvertido.innerHTML = valorConvertido;
}