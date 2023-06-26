let nota1 = parseFloat(prompt('Informe sua primeira nota'));
let nota2 = parseFloat(prompt('Informe sua segunda nota'));
let media = (nota1 + nota2) / 2;

if(media === 10) {
    alert('Aprovado com distinção')
} else if(media >= 7) {
    alert('Parabéns! você foi aprovado')
} else {
    alert('Reprovado!');
}
let teste = 'Mudança'
