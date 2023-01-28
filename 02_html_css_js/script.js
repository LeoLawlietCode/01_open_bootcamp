const print = (algo) => {
  console.log(algo)
}

const calcularValorMensual = () => {
  var cantidad = document.getElementById("cantidad").value;
  var cuotas = document.getElementById("cuotas").value;
  var tipo = document.getElementById("tipo").value;

  interes = (tipo / 12) / 100
  resutlado = cantidad * (Math.pow((1 + interes), cuotas) * interes) / (Math.pow((1 + interes), cuotas) - 1)
  print(resutlado.toFixed(2))

  document.getElementById("resultado").innerHTML = "€ " + resutlado.toFixed(2)
}