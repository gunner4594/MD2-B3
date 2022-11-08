
class Staff {
    name : string;
    email : string;
    age : number;
    constructor(name : string, email : string, age : number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName () {
        return this.name;
    }
    getEmail () {
        return this.email;
    }
    getAge () {
        return this.age;
    }
    setName (newName : string) {
        this.name = newName;
    }
    setEmail (newEmail : string) {
        this.email = newEmail;
    }
    setAge (newAge : number) {
        this.age = newAge;
    }
}
let staff = new Staff('Staff 1', 'staff@gmail.com', 20);
console.log(staff.getName());
staff.setName('Duy');
console.log(staff.getName());