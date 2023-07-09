class Person {
  constructor(name, idade) {
    this.name = name;
    this.idade = idade;
  }

  sayMyName() {
    return console.log(`Oi, meu nome é ${this.name}`);
  }
  sayMyAge() {
    return console.log(`Tenho ${this.idade} anos...`);
  }
}

module.exports = {
  Person,
};
