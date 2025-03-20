const { addString } = require('./stringCalculator'); // Import the addString function

describe('addString function', () => {
  test('should return 0 for an empty string', () => {
    expect(addString("")).toBe(0);
  });

  test('should return 0 for undefined string', () => {
    expect(addString()).toBe(0);
  });

  test("should return the number itself for single number input", () => {
    expect(addString("5")).toBe(5);
  });

  test("should return the sum of two numbers separated by comma", () => {
    expect(addString("1,2")).toBe(3);
  });

  test("should handle new lines between numbers", () => {
    expect(addString("1\n2,3")).toBe(6);
 });

  test("should support custom delimiter", () => {
    expect(addString("//;\n1;2")).toBe(3);
 });

 test("should support special character delimiters", () => {
  expect(addString("//.\n4.5.6")).toBe(15);
 });

 test("should ignore numbers greater than 1000", () => {
  expect(addString("2,1001")).toBe(2);
 });

 test("should throw error for negative numbers", () => {
  expect(() => addString("1,-2,3,-4")).toThrow("Negatives not allowed: -2, -4");
 });

 test("should support single custom delimiter of any length", () => {
  expect(addString("//[***]\n1***2***3")).toBe(6);
 });

  test("should ignore numbers greater than 1000 with custom delimiter", () => {
    expect(addString("//[***]\n2***1001***3")).toBe(5);
  });

  test("should throw error for negative numbers with custom delimiter", () => {
    expect(() => addString("//[***]\n1***-2***3")).toThrow("Negatives not allowed: -2");
  });

  test("should support multiple custom delimiters of any length", () => {
    expect(addString("//[***][%%]\n1***2%%3")).toBe(6);
  });

  test("should ignore numbers greater than 1000 with multiple delimiters", () => {
    expect(addString("//[***][%%]\n2***1001%%3")).toBe(5);
  });

  test("should throw error for negative numbers with multiple delimiters", () => {
    expect(() => addString("//[***][%%]\n1***-2%%3")).toThrow("Negatives not allowed: -2");
  });

  test("should support multiple custom delimiters of any length", () => {
    expect(addString("//[***][%%]\n1***2%%3")).toBe(6);
  });

  test("should ignore numbers greater than 1000 with multiple delimiters", () => {
    expect(addString("//[***][%%]\n2***1001%%3")).toBe(5);
  });

  test("should throw error for negative numbers with multiple delimiters", () => {
    expect(() => addString("//[***][%%]\n1***-2%%3")).toThrow("Negatives not allowed: -2");
  });

});
