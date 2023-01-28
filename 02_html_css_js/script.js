const calcularValorMensual = () => {
  var cantidad = document.getElementById("cantidad").value;
  var cuotas = document.getElementById("cuotas").value;
  var tipo = document.getElementById("tipo").value;

  interes = (tipo / 12) / 100
  // Cálculo de acuerdo a la fórmula V = C * (((1 + i)^n)*i / ((1 + i)^n) - 1))
  resutlado = cantidad * (Math.pow((1 + interes), cuotas) * interes) / (Math.pow((1 + interes), cuotas) - 1)

  // Edición de la etiqueta <p> para mostrar el valor
  document.getElementById("resultado").innerHTML = "€ " + resutlado.toFixed(2)
}