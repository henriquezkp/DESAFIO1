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


        this.loginPage();
        this.mostra();
        this.recuperarDados();
        this.registrarBotoes();
    }

    loginPage() {
        this.sectionLogin.style.display = "block";
        this.sectionHome.style.display = "none";
        this.sectionRent.style.display = "none";
    };

    homePage() {
        this.sectionLogin.style.display = "none";
        this.sectionHome.style.display = "block";
        this.sectionRent.style.display = "none";
    };

    rentPage(jogo) {
        this.sectionLogin.style.display = "none";
        this.sectionHome.style.display = "none";
        this.sectionRent.style.display = "none";
        console.log(jogo);
        const testes = document.getElementById("testes");
        let novoHTML = '';
        const jj = new Jogo(jogo);

        novoHTML += jj.rentCard();
        testes.innerHTML = novoHTML;
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
        const testes = document.getElementById("cardGames");
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

        const objeto = event.path[1];
        const cardDoGame = objeto.dataset.id;

        const jogo = gamesList.find(f => f.game === cardDoGame);
        //console.log(jogo);
        this.rentPage(jogo);
    }


}

new App();