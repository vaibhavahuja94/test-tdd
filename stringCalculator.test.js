const { add } = require('./stringCalculator'); // Import the add function

describe('add function', () => {
  test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

});
