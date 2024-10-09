export class User{

    constructor(identification, password){
        this.identification = identification;
        this.password = password;
    }

    getIdentification(){
        return this.identification;
    }

    getPassword(){
        return this.password;
    }

    setIdentification(identification){
        this.identification = identification;
    }

    setPassword(password){
        this.password = password;
    }

}