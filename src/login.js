import { usersList } from "./users.data"
export class Login {
    constructor(user, password) {

        this.inputUsuario = user;
        this.inputPassword = password;
        this.buscaUser(user);
    }


    buscaUser(usuario) {
        console.log(usuario);
        let user = usersList.find(listaDeUsers => listaDeUsers.login.username === usuario || listaDeUsers.email === usuario);
        console.log(user);
        if (user !== undefined) {

            if (user.login.username === this.inputUsuario || user.email === this.inputUsuario) {

                if (user.login.password === this.inputPassword) {

                    this.salvarLocal(user);
                    return true;
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

}