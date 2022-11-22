class Carro {
    marca;
    cor;
    mediaCombustivel;

    constructor(marca, cor, mediaCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.mediaCombustivel = mediaCombustivel;
    }

    calcularViagem(distancia, precoCombustivel) {
        return distancia * this.mediaCombustivel * precoCombustivel;
    }
    
}

const ecosport = new Carro('Fiat', 'Preto', (1/10));

console.log(ecosport.calcularViagem(70, 5.5));