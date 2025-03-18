/**
 * Adds numbers from a string input, supporting commas as delimiters.
 * If the input string is empty, returns 0.
 * If the string contains a single number, returns that number.
 * If multiple numbers are provided, returns their sum.
 * @param {string} numbers - The input string with numbers and delimiters.
 * @returns {number} The sum of valid numbers.
 */
function add(numbers) {
    if (numbers === "") return 0;
    
    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(extractDelimiter(parts[0])); // Extract custom delimiter
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(Number); // Split and convert to numbers
    let sum = 0;
    const negatives = [];

    for (let i = 0; i < numArray.length; i++) {
        const num = numArray[i];

        if (num < 0) {
            negatives.push(num);
        } else if (num <= 1000) {
            sum += num;
        }
    }

    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return sum;
}

/**
 * Extracts a single custom delimiter of any length.
 * Escapes special regex characters in the delimiter.
 * 
 * @param {string} header - The first line of the input string containing the delimiter.
 * @returns {string} A regex pattern to be used for splitting numbers.
 */
function extractDelimiter(header) {
    const delimiter = header.match(/\[(.*?)\]/)[1];
    return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { add };
