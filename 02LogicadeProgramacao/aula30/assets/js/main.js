const dataAtual = new Date();

const tituloData = document.querySelector('#titulo');

function adicionarZero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

function nomeDoDiaDaSemana(numeroDoDia) {

    switch (numeroDoDia) {
        case 0:
            numeroDoDia = "Domingo"
            break;
        case 1:
            numeroDoDia = "Segunda-feira"
            break;
        case 2:
            numeroDoDia = "Terça-feira"
            break;
        case 3:
            numeroDoDia = "Quarta-feira"
            break;
        case 4:
            numeroDoDia = "Quinta Feira"
            break;
        case 5:
            numeroDoDia = "Sexta-Feira"
            break;
        case 6:
            numeroDoDia = "Sábado"
            break;
    }

    return numeroDoDia;

}

function nomeDoMes(numeroDoMes) {

    switch (numeroDoMes) {
        case 0:
            numeroDoMes = "janeiro"
            break;
        case 1:
            numeroDoMes = "fevereiro"
            break;
        case 2:
            numeroDoMes = "março"
            break;
        case 3:
            numeroDoMes = "abril"
            break;
        case 4:
            numeroDoMes = "maio"
            break;
        case 5:
            numeroDoMes = "junho"
            break;
        case 6:
            numeroDoMes = "julho"
            break;
        case 7:
            numeroDoMes = "agosto"
            break;
        case 8:
            numeroDoMes = "setembro"
            break;
        case 9:
            numeroDoMes = "outubro"
            break;
        case 10:
            numeroDoMes = "novembro"
            break;
        case 11:
            numeroDoMes = "dezembro"
            break;
    }
    return numeroDoMes;
}

function textoData(data) {
    let diaDaSemana = data.getDay();

    const diaDoMes = data.getDate();
    let mes = data.getMonth();
    const ano = data.getFullYear();

    const hora = adicionarZero(data.getHours());
    const minuto = adicionarZero(data.getMinutes());


    tituloData.innerHTML = `${nomeDoDiaDaSemana(diaDaSemana)}, ${diaDoMes} de ${nomeDoMes(mes)} de ${ano} <br>
    ${hora}:${minuto}`;

}

textoData(dataAtual);