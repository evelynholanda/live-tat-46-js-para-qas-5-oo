
const { faker } = require('@faker-js/faker')

/**
 * Encapsulamento e abstração
 */
class Human {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  greet() {
    return Math.random() > 0.5 ? `Hi` : 'Hello'
  }
}


//criando novo humano
const randomHuman = new Human(faker.person.firstName(), faker.number.int(99))
console.log(`${randomHuman.greet()}, I'm ${randomHuman.name}`)



/**
 * Herança
 */
class Wizard extends Human {
  constructor(name, age, powers = []) {
    super(name, age)
    this.powers = [...powers]
  }

  showRandomPower() {
    if (this.powers.length <= 0) {
      return "I haven't developed any power yet, but I'm learning at Hogwartz!"
    } else {
      const randomIndex = Math.floor(Math.random() * this.powers.length)
      return this.powers[randomIndex]
    }
  }
}

const randomWizard = new Wizard(
  faker.person.firstName(),
  faker.number.int(150),
  [
    'Lumus Maxima',
    'Expecto Patronum',
    'Abracadabra'
  ]
)


console.log(`${randomWizard.greet()}, I'm ${randomWizard.name}. I'm a wizard.`)
console.log(`Here's one of my powers: ${randomWizard.showRandomPower()}`)

const anotherRandomWizard = new Wizard(
    faker.person.firstName(),
    faker.number.int(150),
)


console.log(`${anotherRandomWizard.greet()}, I'm ${anotherRandomWizard.name}. I'm a wizard too.`)
console.log(anotherRandomWizard.showRandomPower())


/**
 * Polimorfismo
 */
class Gaucho extends Human {
  constructor(name, age) {
    super(name, age)
  }

  greet() {
    return 'E aí tchê'
  }
}

const randomGaucho = new Gaucho(faker.person.firstName(), faker.number.int(99))


console.log(`${randomGaucho.greet()}, me chamo ${randomGaucho.name}.`)

class Mineiro extends Human {
  constructor(name, age) {
    super(name, age)
  }

  greet() {
    return 'Bão'
  }
}


const randomMineiro = new Mineiro(faker.person.firstName(), faker.number.int(99))

console.log(`${randomMineiro.greet()}, me chamo ${randomGaucho.name}.`)
