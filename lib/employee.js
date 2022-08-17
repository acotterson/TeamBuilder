class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string" || !name.trim().length || typeof email !== "string"|| !email.trim().length) {
        throw new Error("Expected parameters 'name' and 'email' to be non-empty strings.");
      }
      if (isNaN(id) || typeof id !== "number" || id < 0) {
        throw new Error("Expected parameter 'id' to be a non-negative number.");
      }

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
