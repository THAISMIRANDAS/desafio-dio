function escreverNome(nome) {
    return ('Meu nome é ' + nome);
}

function maiorIdade(idade) {
    if (idade >= 18) {
        return (' e sou MAIOR de Idade.');
    } else {
        return (' e sou MENOR de Idade.')
    }
}

console.log(escreverNome('Thais') + maiorIdade(32));