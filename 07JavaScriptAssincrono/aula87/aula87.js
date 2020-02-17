function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Caí no Erro');
        return;
      }
      
      resolve(msg);
      return;
    }, tempo);
  });
}

// Promise.all Promise.race Promice.resolve Promise.reject
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject('Pagina em Cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));