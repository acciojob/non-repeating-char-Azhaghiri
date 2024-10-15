function firstNonRepeatedChar(str) {
 // Write your code here
	let charCount = {};

    // Loop through the string to populate the charCount object
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Loop through the string again to find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return a message
    return " ";
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 