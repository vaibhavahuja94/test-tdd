/**
 * Adds numbers from a string input, supporting commas as delimiters.
 * If the input string is empty, returns 0.
 * If the string contains a single number, returns that number.
 * If multiple numbers are provided, returns their sum.
 * @param {string} numbers - A string of numbers.
 * @returns {number} Return a single number as is.
 */
function add(numbers) {
    if (numbers === "") return 0;
    if (!numbers.includes(",")) return parseInt(numbers, 10);
    const numArray = numbers.split(",").map(Number);
    let sum = 0;

    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }

    return sum;
}

module.exports = { add };
