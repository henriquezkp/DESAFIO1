import { usersList } from "./users.data"
export class Login {
    constructor() {
        this.inputUsuario = document.getElementById("userInput");
        this.inputPassword = document.getElementById("passwordInput");
        this.buttonLogin = document.getElementById("singin");
        this.sectionLogin = document.getElementById("sectionLogin");
        this.recuperarDados();
    }

    registraEventos() {
        this.buttonLogin.onclick = () => {
                this.buscaUser(this.inputUsuario.value);
            }
            /*console.log(this.inputUsuario);
            console.log(this.inputPassword);*/
    }

    buscaUser(usuario) {
        let user = usersList.find(listaDeUsers => listaDeUsers.login.username === usuario || listaDeUsers.email === usuario);
        //console.log(user);
        if (user !== undefined) {
            //console.log("certo");
            if (user.login.username === this.inputUsuario.value || user.email === this.inputUsuario.value) {
                //console.log("2x certo");
                if (user.login.password === this.inputPassword.value) {
                    console.log("logado");
                    this.sectionLogin.style.display = "none";
                    document.getElementById("sectionHome").style.display = "block";
                    console.log(user);
                    this.salvarLocal(user);
                } else {
                    console.log("verificar senha");
                }

            }
        } else {
            console.log("errado");

            alert("Usuário não cadastrado");
            return false;
        }
    }

    salvarLocal(user) {
        localStorage.setItem("localUser", JSON.stringify(user));
    }

    recuperarDados() {
        let user = localStorage.getItem("localUser");

        if (user !== null) {
            console.log("é");
            return true;
        } else {
            console.log("n")
            return false;
        }
    }


}