const mapArrayToStrings = require("./mapArrayToStrings");

describe("Stringified array", () => {
  test("Integers", () => {
    expect(mapArrayToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Mixed types", () => {
    expect(mapArrayToStrings([1, 2, 3, null, undefined, "", "test"])).toEqual(["1", "2", "3"]);
  });
  test("With floatings", () => {
    expect(mapArrayToStrings([1, 2, 3.2312])).toEqual(["1", "2"]);
  });
  test("Empty array", () => {
    expect(mapArrayToStrings([])).toEqual([]);
  });
  test("Empty array", () => {
    expect(mapArrayToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
