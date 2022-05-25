const delay = require("./delay");

describe("Stringified array", () => {
  test("Integers", async () => {
    expect(await delay(() => 5 + 5, 1000)).toBe(10);
  });
});
