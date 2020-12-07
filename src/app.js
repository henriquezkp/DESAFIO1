import { Jogo } from "./jogos";
import { gamesList } from "./games.data";
import { Login } from "./login";


const login = new Login;
const sectionLogin = document.getElementById("sectionLogin");
const sectionHome = document.getElementById("sectionHome");
const sectionRent = document.getElementById("sectionRent");


window.addEventListener("load", () => {

    if (login.recuperarDados()) {
        homePage();
    }
    mostra();
});


const homePage = () => {
    sectionLogin.style.display = "none";
    sectionHome.style.display = "block";
    sectionRent.style.display = "block";
};

login.registraEventos();

const registrarBotoes = () => {
    document.querySelectorAll(".compra").forEach((el) => {
        el.onclick = (event) => compra(event);
    });

}

const mostra = () => {
    const testes = document.getElementById("cardGames");
    let novoHTML = '';

    gamesList.forEach(testeJogo => {
        const cardGame = new Jogo(testeJogo);
        novoHTML += cardGame.mostraCard();
    });

    testes.innerHTML = novoHTML;
}

const compra = (event) => {
    console.log(event.path);
    const testete = event.path[3];
    const outroteste = parse(testete.dataset.nome);
    console.log(outroteste);
    const jogo = gamesList.find(nomeDoJogo);
    console.log(jogo);
}