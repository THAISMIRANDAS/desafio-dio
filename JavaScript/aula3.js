function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const preco = 200;
const pagamento = 4;

if (pagamento === 1) {
    console.log(aplicarDesconto(preco, 10));
} else if (pagamento === 2) {
    console.log(aplicarDesconto(preco, 15));
} else if (pagamento === 3) {
    console.log(preco);
} else {
    console.log(aplicarJuros(preco, 10));
}

