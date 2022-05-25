const validateValue = require("./validateValue");

describe("Validate value", () => {
  test("Correct value", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("Greater value", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("Lesser value", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("Egde bottom value", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("Edge top value", () => {
    expect(validateValue(100)).toBe(true);
  });
});
