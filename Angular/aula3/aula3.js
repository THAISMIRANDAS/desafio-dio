//tipos primitivos: boolean, number, string
var ligado = false; //or true
var nome = "Thais";
var idade = 31;
var altura = 1.6;
//null - Só pode receber null.
//underfined = só pode receber undefined.
var nulo = null;
var indefinido = undefined;
//any - qualquer coisa
//void -  vazio (retornar coisas que precisam ser vazio)
//let retorno: void = void
//retorna vazio.
var retornoView = false;
//tipo Objeto - Aceita qualquer objeto
var produto = {
    name: "Thais",
    cidade: "Niterói",
    idade: 31
}; //Sem previsibilidade
var meuProduto = {
    nome: "Tênis",
    preço: 89.90,
    unidades: 5
};
//Arrays - Vetor
var dados = ["Thais", "Paula", "Leila"];
//ou
var dados2 = ["Thais", "Paula", "Leila"];
//vetor com mais de um tipo (não importa a ordem)
var infos = ["Thais", 31, 1.61, "Niterói"];
//Tuplas - Um ordem das informações
var boleto = ["água conta", 199.90, 15.02];
//Arrays: Métodos (Igual ao Javascript)
dados.pop();
//Datas
var aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
