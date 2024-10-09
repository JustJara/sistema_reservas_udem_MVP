import { SistemaReservas } from "./sistema_reservas.js";


class Main {

    constructor(){
        
        this.sistemaReservas = new SistemaReservas();
        
        this.sistemaReservas.addUser("123", "123");
        this.sistemaReservas.addUser("456", "456");

        this.initLogin();
        
    }

    initLogin(){
        const loginButton = document.querySelector(".form-submit-button");

        loginButton.addEventListener("click",(event) =>{
            event.preventDefault();

            const identification = document.querySelector("#identification").value;
            const password = document.querySelector("#password").value;

            const loginSucces = this.sistemaReservas.logIn(identification, password);

            if (loginSucces){
                alert("Inicio de sesión exitoso");
                window.location.href = "../html/home.html";
            } else{
                alert("Usuario o contraseña incorrectos");
            }
        })
    }


}

document.addEventListener("DOMContentLoaded", () => {
    new Main();
});