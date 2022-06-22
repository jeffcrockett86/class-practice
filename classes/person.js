class Person {


  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`)
  }
  static introducePeople(persons) {
    let errors = 0;
    if (!Array.isArray(persons)) {
      throw new Error("introducePeople only takes an array as an argument.");
      errors++
    }
    if (persons.filter((person) => !person instanceof Person).length > 0) {
      throw new Error("All items in array must be Person class instances.");
      errors++
    }
    if (errors === 0) {
      persons.forEach((person) => person.introduce())
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
