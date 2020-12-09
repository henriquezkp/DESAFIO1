import { Jogo } from "./jogos";
import { gamesList } from "./games.data";
import { Login } from "./login";

class App {

    constructor() {

        this.sectionLogin = document.getElementById("sectionLogin");
        this.sectionHome = document.getElementById("sectionHome");
        this.sectionRent = document.getElementById("sectionRent");
        this.inputUsuario = document.getElementById("userInput");
        this.inputPassword = document.getElementById("passwordInput");
        this.buttonLogin = document.getElementById("singin");
        this.finalizarCompra = document.getElementById("finalizaCompra");


        this.loginPage();
        this.mostra();
        this.recuperarDados();
        this.registrarBotoes();
    }

    loginPage() {
        this.sectionLogin.style.display = "block";
        this.sectionHome.style.display = "none";
        this.sectionRent.style.display = "none";
        this.finalizarCompra.style.display = "none";
    };

    homePage() {
        this.sectionLogin.style.display = "none";
        this.sectionHome.style.display = "block";
        this.sectionRent.style.display = "none";
        this.finalizarCompra.style.display = "none";

    };

    rentPage(jogo) {
        this.sectionLogin.style.display = "none";
        this.sectionHome.style.display = "none";
        this.sectionRent.style.display = "block";
        this.finalizarCompra.style.display = "none";

        console.log(jogo);
        const divRent = document.getElementById("sectionRent");
        let novoHTML = '';
        let jj = new Jogo(jogo);

        novoHTML += jj.rentCard();
        divRent.innerHTML = novoHTML;
        document.querySelectorAll(".card-compra2").forEach((el) => {
            el.onclick = (event) => this.mostraCompra(event);
        });
    };

    finalizarPage(jogo) {
        this.sectionLogin.style.display = "none";
        this.sectionHome.style.display = "none";
        this.sectionRent.style.display = "none";
        this.finalizarCompra.style.display = "block";
        console.log(jogo);
        const testes = document.getElementById("testes");
        let novoHTML = '';
        let jj = new Jogo(jogo);

        novoHTML += jj.finalizarCompra();
        testes.innerHTML = novoHTML;
        document.querySelectorAll(".card-confirma").forEach((el) => {
            el.onclick = (event) => this.confirmaCompra(event);
        });
        document.querySelectorAll(".card-cancela").forEach((el) => {
            el.onclick = (event) => this.cancelaCompra(event);
        });
    };

    registrarBotoes() {
        document.querySelectorAll(".card-link").forEach((el) => {
            el.onclick = (event) => this.compra(event);
        });

        this.buttonLogin.onclick = () => {
            const login = new Login(this.inputUsuario.value, this.inputPassword.value);
            if (login) {
                this.homePage();
            }
        }
    }

    mostra() {
        let testes = document.getElementById("cardGames");
        let novoHTML = '';

        gamesList.forEach(testeJogo => {
            const cardGame = new Jogo(testeJogo);
            novoHTML += cardGame.mostraCard();
        });

        testes.innerHTML = novoHTML;
    }

    recuperarDados() {
        let user = localStorage.getItem("localUser");

        if (user !== null) {
            this.homePage();
        } else {
            console.log("n");
            //this.buscaUser(this.inputUsuario);
        }
    }

    compra(event) {

        let objeto = event.path[1];
        let cardDoGame = objeto.dataset.id;

        let jogo = gamesList.find(f => f.game === cardDoGame);
        //console.log(jogo);
        this.rentPage(jogo);
    }

    mostraCompra(event) {

        let objeto = event.path[1];
        let cardDoGame = objeto.dataset.id;

        let jogo = gamesList.find(f => f.game === cardDoGame);
        //console.log(jogo);
        this.finalizarPage(jogo);
    }

}

new App();