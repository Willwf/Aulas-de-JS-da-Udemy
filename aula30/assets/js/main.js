const dataAtual = new Date();

const tituloData = document.querySelector('#titulo');

function adicionarZero (numero) {
    if (numero < 10) {
        return "0" + numero;
    } else {
        return numero;
    }
}

function textoData(data) {
    let diaDaSemana = data.getDay();
    const diaDoMes = adicionarZero(data.getDate());
    let mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = adicionarZero(data.getHours());
    const minuto = adicionarZero(data.getMinutes());

    switch (diaDaSemana) {
        case 0:
            diaDaSemana = "Domingo"
            break;
        case 1:
            diaDaSemana = "Segunda-feira"
            break;
        case 2:
            diaDaSemana = "Terça-feira"
            break;
        case 3:
            diaDaSemana = "Quarta-feira"
            break;
        case 4:
            diaDaSemana = "Quinta Feira"
            break;
        case 5:
            diaDaSemana = "Sexta-Feira"
            break;
        case 6:
            diaDaSemana = "Sábado"
            break;
    }

    switch (mes) {
        case 0:
            mes = "Janeiro"
            break;
        case 1:
            mes = "Fevereiro"
            break;
        case 2:
            mes = "Março"
            break;
        case 3:
            mes = "Abril"
            break;
        case 4:
            mes = "Maio"
            break;
        case 5:
            mes = "Junho"
            break;
        case 6:
            mes = "Julho"
            break;
        case 7:
            mes = "Agosto"
            break;
        case 8:
            mes = "Setembro"
            break;
        case 9:
            mes = "Outubro"
            break;
        case 10:
            mes = "Novembro"
            break;
        case 11:
            mes = "Dezembro"
            break;
    }



    tituloData.innerHTML = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano} <br>
    ${hora}:${minuto}` ;

}

textoData(dataAtual);