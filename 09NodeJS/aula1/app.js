// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());

// const path = require('path');
// const axios = require('axios');
const { Pessoa } = require('./mod1');

const p1 = new Pessoa('Luiz');
console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then(response => console.log(response.data))
//   .catch(e => console.log(e));