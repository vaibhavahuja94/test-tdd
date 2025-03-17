const { add } = require('./stringCalculator'); // Import the add function

describe('add function', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for single number input", () => {
    expect(add("5")).toBe(5);
  });

});
