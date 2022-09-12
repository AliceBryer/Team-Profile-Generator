const Employee = require("../library/Employee");

describe("Employee", () => {
  describe("Creating a new employee", () => {
    it("name should be sally, id should be number, email should be string", () => {
      const employee = new Employee("Sally", 6, "sally@gmail.com");

      expect(employee.name).toBe("Sally");
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  });
});
