const Intern = require("../library/Intern");

describe("Intern", () => {
  describe("Create a new intern", () => {
    it("name should be Harvey, id = number, email = string, school = string", () => {
      const intern = new Intern(
        "Harvey",
        12,
        "harvey@gmail.com",
        "Shire Oak"
      );

      expect(intern.name).toBe("Harvey");
      expect(intern.id).toEqual(expect.any(Number));
      expect(intern.email).toEqual(expect.any(String));
      expect(intern.school).toEqual(expect.any(String));
    });
  });

