const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const raizQuadrada = document.getElementById('raizQuadrada');
const verificarInteiro = document.getElementById('verificarInteiro');
const seNumero = document.getElementById('seNumero');
const arredondaBaixo = document.getElementById('arredondaBaixo');
const arredondaCima = document.getElementById('arredondaCima');
const doisDecimais = document.getElementById('doisDecimais');

numeroTitulo.innerHTML = numero;
raizQuadrada.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
verificarInteiro.innerHTML = `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
seNumero.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
arredondaBaixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
arredondaCima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`
doisDecimais.innerHTML = `<p>Com duas casa decimais: ${numero.toFixed(2)}.<p>`;