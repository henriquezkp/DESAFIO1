import { Jogo } from "./jogos";
import { Login } from "./login";


class Pagina {
    constructor() {
        console.log("oioioi");
    }
}

new Pagina();


const { Jogos } = require("./jogos");


const listaDeJogos = [];

const addJogo = (nome, genero, resumo, classificacao) => {
    const jogo = new Jogo(nome, genero, resumo, classificacao);
    listaDeJogos.push(jogo);
};
const teste = new Login;
teste.registraEventos();