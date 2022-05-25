const square = require("./square");

describe("Square", () => {
  let mockData;

  beforeEach(() => {});
  beforeAll(() => {});

  test("Correct value", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test("Excepted value", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {});
});
