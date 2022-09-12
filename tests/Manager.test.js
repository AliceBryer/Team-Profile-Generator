const Manager = require("../library/Manager");

describe("Manager", () => {
  describe("Create new manager", () => {
    it("name should = boris, id should = number, email should = string, office number should = number", () => {
      const manager = new Manager("boris", 14, "boris@gmail.com", 1922333444);

      expect(manager.name).toBe("boris");
      expect(manager.id).toEqual(expect.any(Number));
      expect(manager.email).toEqual(expect.any(String));
      expect(manager.officeNumber).toEqual(expect.any(Number));
    });
  })