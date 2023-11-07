const user1 = {
    name: 'xyi',
    credits: 100,
    sayHello() {
        console.log(`my name ${this.name}`)
    }
}

function User (name) {
    this.name = name;
    this.credits = 100;
    this.sayHello = function sayHello() {
        console.log(`my name ${this.name}`)
    }
}

const user2 = new User('Alena')

const address = {
    city: {
        id: 0,
        name: undefined,
        postalCode: 12345,
    }
}

console.log('ALENA', address?.city?.name)
console.log('ALENA', address.city.postalCode)