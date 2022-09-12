const Engineer = require("../library/Engineer");

describe("Engineer", () => {
  describe("Creating a new engineer", () => {
    it("name should match user input, id is expected to be number, email should be string,  and github username should be string", () => {
      const engineer = new Engineer(
        "Bobby",
        2,
        "bobby@gmail.com",
        "bobby1988"
      );

      expect(engineer.name).toBe("Bobby");
      expect(engineer.id).toEqual(expect.any(Number));
      expect(engineer.email).toEqual(expect.any(String));
      expect(engineer.github).toEqual(expect.any(String));
    });
  });

 
