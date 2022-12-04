// 1 - Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto de combustível por KM.
// Crie um método que dado a quantidade de quilometros e o preço do combustível
// nos dê o valor gasto em reais para realizar este percurso.

class Carro{
    marca
    cor	
    consumo
    
constructor(marca, cor, consumo) {
          
  this.marca = marca
    this.cor = cor
    this.consumo = consumo
}

calcularConsumo(quilometros, combustivel) {
           return ((quilometros / this.consumo) * combustivel)
}

}

const voyage = new Carro('volks', 'branco', 13)

console.log(voyage.calcularConsumo(160, 5.69).toFixed(2))

