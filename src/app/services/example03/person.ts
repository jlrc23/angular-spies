export class Person {
    name: string;
    lastname: string;
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    sayMyName(){
        window.alert(`${this.name} ${this.lastname}`);
    }
}
