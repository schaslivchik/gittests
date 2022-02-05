'use strict'
console.log('tralalla');

class User{
    constructor(name,surname,age){
        this.firstName = name;
        this.lastName = surname;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const user = new User('Mikkhai', 'Shapovalov', 23)

class UserInfo extends User {
    constructor(name, surname, age, isBanned, isSubscribed){
        super(name, surname, age);
        this.isBanned = isBanned;
        this.isSubscribed = isSubscribed; 
    }
    
}

const user1 = new UserInfo('Nikhai', 'Busarov', 23, false, false)