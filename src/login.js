export class Login {
    constructor() {
        this.inputUsuario = document.getElementById("user");
        this.inputPassword = document.getElementById("password");
        this.buttonLogin = document.getElementById("singin");
    }

    registraEventos() {
        this.buttonLogin.onclick = () => {
            this.buscaUser(this.inputUsuario.value);
        }
    }

    buscaUser(usuario) {
        usersList.find(listaDeUsers => listaDeUsers.username === usuario {

        });
    }
}