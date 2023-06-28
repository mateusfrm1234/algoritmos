/*Onde vc estuda */

let resposta = prompt('Qual turno que você estuda?\nM-Matutino, V-Vespertino ou N-Noturno')

resposta = resposta[0].toLowerCase();

switch(resposta) {
    case 'm':
        alert('Bom dia!');
        break;
    case 'v':
        alert('Boa tarde!');
        break;
    case 'n':
        alert('Boa noite!');
        break;
    default:
        alert('Valor inválido!');
}