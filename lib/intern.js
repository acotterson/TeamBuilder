const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    if(typeof school !== "string" || !name.trim().length){
        throw new Error("Expected parameter 'school' to be a non-empty string.");
    }

    super(name, id, email);
    this.role = "Intern";
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;