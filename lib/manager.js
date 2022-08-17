const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (isNaN(officeNumber) || typeof officeNumber !== "number" || officeNumber < 0) {
        throw new Error("Expected parameter 'officeNumber' to be a non-negative number.");
      }

    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}

module.exports = Manager;
