let nota = parseFloat(prompt('Informe sua nota'));

let entradaInvalida = isNaN(nota);
let aprovado = nota >= 5;
let reprovado = nota < 3;

if (entradaInvalida) {
    alert('Entrada inválida \n Digite novamente');
} else if (aprovado) {
    alert('Parabens! Você está aprovado');
} else if (reprovado) {
    alert('Infeliz! Você está reprovado');
} else {
    alert('Quase lá! Você está em recuperação')
    let notaRecuperacao = parseFloat(prompt('Informe sua nota da recuperação'));
    let mediaRecuperacao = (nota + notaRecuperacao) / 2;
    aprovado = mediaRecuperacao >= 5;
    if (aprovado) {
        alert('Parabens! Você está aprovado');
    } else {
        alert('Infeliz! Você está reprovado')
    }
}