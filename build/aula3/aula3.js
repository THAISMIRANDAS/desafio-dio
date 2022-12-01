"use strict";
//tipos primitivos: boolean, number, string
let ligado = false; //or true
let nome = "Thais";
let idade = 31;
let altura = 1.6;
//null - Só pode receber null.
//underfined = só pode receber undefined.
let nulo = null;
let indefinido = undefined;
//any - qualquer coisa
//void -  vazio (retornar coisas que precisam ser vazio)
//let retorno: void = void
//retorna vazio.
let retornoView = false;
//tipo Objeto - Aceita qualquer objeto
let produto = {
    name: "Thais",
    cidade: "Niterói",
    idade: 31
}; //Sem previsibilidade
let meuProduto = {
    nome: "Tênis",
    preço: 89.90,
    unidades: 5,
};
//Arrays - Vetor
let dados = ["Thais", "Paula", "Leila"];
//ou
let dados2 = ["Thais", "Paula", "Leila"];
//vetor com mais de um tipo (não importa a ordem)
let infos = ["Thais", 31, 1.61, "Niterói"];
//Tuplas - Um ordem das informações
let boleto = ["água conta", 199.90, 15.02];
//Arrays: Métodos (Igual ao Javascript)
dados.pop();
//Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
