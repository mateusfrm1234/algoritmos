let usuario = parseFloat(prompt(`Digite um nome de usuário:`));
let senha = parseFloat(prompt(`Digite sua senha:`));
let senhaInvalida = senha = usuario;

for (let i = 0; senhaInvalida; i++) {
    alert(`Inválida! Digite uma senha diferente do nome de usuário.`);
    senha = parseFloat(prompt(`Digite uma senha válida:`));
    senhaInvalida = isNaN(senha) || senha < senhaInvalida || senha > senhaInvalida
    if (senha !== usuario) {
        break;
    }
}

alert(`Conta criada com sucesso ${usuario, senha}`)