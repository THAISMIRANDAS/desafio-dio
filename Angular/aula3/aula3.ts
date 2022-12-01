//tipos primitivos: boolean, number, string
    let ligado: boolean = false //or true
    let nome: string = "Thais"
    let idade: number = 31
    let altura: number = 1.6

//null - Só pode receber null.
//underfined = só pode receber undefined.
    let nulo: null = null
    let indefinido: undefined = undefined

//any - qualquer coisa
//void -  vazio (retornar coisas que precisam ser vazio)
//let retorno: void = void
//retorna vazio.
let retornoView: any = false

//tipo Objeto - Aceita qualquer objeto
let produto: object = {
    name: "Thais",
    cidade: "Niterói",
    idade: 31
} //Sem previsibilidade

//objeto tipado, se faltar algo ele diz o que falta (com previsibilidade)
type produtoLoja = {
    nome: string;
    preço: number;
    unidades: number;
};

let meuProduto: produtoLoja = {
    nome: "Tênis",
    preço: 89.90,
    unidades: 5,
}

//Arrays - Vetor
let dados: string[] = ["Thais", "Paula", "Leila"];
//ou
let dados2: Array<string> = ["Thais", "Paula", "Leila"];

//vetor com mais de um tipo (não importa a ordem)
let infos: (string | number)[] = ["Thais", 31, 1.61, "Niterói"]

//Tuplas - Um ordem das informações
let boleto:[string, number, number] = ["água conta", 199.90, 15.02]

//Arrays: Métodos (Igual ao Javascript)
dados.pop();

//Datas
let aniversario: Date = new Date("2022-12-01 05:00")
console.log(aniversario.toString())