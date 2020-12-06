import { Jogo } from "./jogos";
import { Login } from "./login";


/*class Pagina {

}

new Pagina();*/


const login = new Login;
const sectionLogin = document.getElementById("sectionLogin");
const sectionHome = document.getElementById("sectionHome");
const sectionRent = document.getElementById("sectionRent");




window.addEventListener("load", () => {

    if (login.recuperarDados()) {
        homePage();
    }
});


const homePage = () => {
    sectionLogin.style.display = "none";
    sectionHome.style.display = "block";
    sectionRent.style.display = "block";
};

login.registraEventos();