//Crie um programa que seja capaz de percorrer uma lista de numeros e encontrar o seu par.

const numeros = [200, 250, 666, 133, 211, 1003, 2000, 9999, 54, 55];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    
    if (numero % 2 === 0) {
        console.log(numero);
    }
    
}

