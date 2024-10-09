import { User } from "./user.js"; 


export class SistemaReservas{
    constructor(){
        this.reservas = [];
        this.users = [];
    }
    addReserva(reserva){
        this.reservas.push(reserva);
    }
    getReservas(){
        return this.reservas;
    }

    addUser(identification,password){
        const user = new User(identification,password);
        this.users.push(user);
    }

    logIn(identification, password){

        for (let i = 0; i < this.users.length; i++){
            if (this.users[i].identification == identification && this.users[i].password == password){
                return true;
            }
        }
        
        return false
    }
}