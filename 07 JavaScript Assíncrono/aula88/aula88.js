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

// esperaAi('Fase 1', rand(0, 3))
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand())
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na fase:', fase);
//   })
//   .catch(e => console.log(e));

async function executa() {
  try {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase1);

    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase1);

    console.log('Terminamos na fase:', fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

// pending -> pendente
// fulfilled -> resolvida
// rejected -> rejeitada