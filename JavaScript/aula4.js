function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
    /*Math.pow coloca a "altura" elevado ao quadrado*/
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return('Abaixo do Peso');
    } else if (imc >=18.5 && imc <= 25){
        return('Peso normal');
    } else if (imc >=25 && imc <= 30){
        return('Acima do Peso');
    } else if (imc >=30 && imc <= 40){
        return('Obeso');
    } else {
        return('Obesidade Grave');
    }
}

function main() {
    const altura = 1.70;
    const peso = 75;
    
    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));

}

main();



