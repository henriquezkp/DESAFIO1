class Pagina {
    constructor() {
        console.log("Minha página construida");
    }
}

new Pagina();


const { Jogos } = require("./jogos");

import { Jogo } from "./jogos";
const listaDeJogos = [];

const addJogo = (nome, genero, resumo, classificacao) => {
    const jogo = new Jogo(nome, genero, resumo, classificacao);
    listaDeJogos.push(jogo);
};