//funções
function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(4, 7);

console.log(soma);

//ou

function addHello(name: string): string {
    return `Hello ${name}`;
}

console.log(addHello("Thais"));

//multi Tipos
function CallToPhone(phone: number | string): number | string {
    return phone;
}

console.log(CallToPhone(2133665589))

//Async (sempre que tiver um function async, eu tenho que retornar uma PROMISE do valor que quero retornar)
async function getDatabase(id: number): Promise<number | string>{
    return "Thais";
}