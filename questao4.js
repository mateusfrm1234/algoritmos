let populacaoA = 80000;
let taxaCrescimentoA = 0.03;

let populacaoB = 200000;
let taxaCrescimentoB = 0.015;

let anos = 0;

let pergunta = prompt('Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.');
let resposta = 0;

while (pergunta =! anos) {
    alert('Resposta errada! tente novamente.');
    pergunta = prompt('Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.');
}

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}

alert(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);