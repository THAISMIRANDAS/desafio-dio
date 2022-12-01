//Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

// a = 5 e 18
// N = 63

// multiplo de 3
// 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63
// multiplo 18
// 18, 36, 54

//Armazenar os multiplos de 3
//Armazenar os multiplos de 18

somar(63);

function somar(limite) {
  let multiplos3 = 0;
  let multiplos18 = 0;

  for (let i = 0; i < limite; i++) {
    if(i % 3 === 0)
    multiplos3 += i;
    if(i % 18 === 0)
    multiplos18 += i;
  }

  console.log(multiplos3 + multiplos18);
}