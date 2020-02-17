const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos1 = ',.;!@#$%¨&*()_+{}[]^~/+-/';
const geraSimbolo = () => simbolos1[rand(0, simbolos1.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos1) {
  const senhaArray = [];
  qtd = Number(qtd);

  for(let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos1 && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join('').slice(0, qtd);
}