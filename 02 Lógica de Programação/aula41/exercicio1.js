// Escreva uma função que recebe dois números e retorne o maior deles

function maiorNumero (numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

// Outra forma (mais sucinta) de resolver
const max2 = (x, y) => x > y ? x : y;

console.log(maiorNumero(54, 55));
console.log(max2(5, 6))
