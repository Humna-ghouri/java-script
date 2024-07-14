// 1.
// function displayCurrentDateTime() {
//     // Get current date/time
//     var currentDateTime = new Date();

//     // Format date and time components
//     var date = currentDateTime.toLocaleDateString(); // Get date in local format
//     var time = currentDateTime.toLocaleTimeString(); // Get time in local format

//     // Display in browser
//     var dateTimeString = `Current Date: ${date}<br>Current Time: ${time}`;
//     document.getElementById('dateTimeDisplay').innerHTML = dateTimeString;
// }

// // Example usage: Call the function to display current date and time
// displayCurrentDateTime();

alert("hbgshbsd")
// 2.
// function greetUser(firstName, lastName) {
//     var fullName = firstName + ' ' + lastName;
//     console.log('Hello, ' + fullName + '! Welcome!');
// }

// // Example usage:
// var firstName = prompt('Enter your first name:');
// var lastName = prompt('Enter your last name:');

// greetUser(firstName, lastName);


// 3.
// function addNumbers() {
//     // Prompt the user to enter the first number
//     var num1 = parseFloat(prompt("Enter the first number:"));
    
//     // Prompt the user to enter the second number
//     var num2 = parseFloat(prompt("Enter the second number:"));
    
//     var sum = num1 + num2;
    
//     return sum;
// }

// var result = addNumbers();

// console.log("The sum of the two numbers is: " + result);



// 4.
// function calculate(num1, num2, operator) {
//     var result;
    
//     switch(operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             // Check if num2 is zero to prevent division by zero
//             if (num2 !== 0) {
//                 result = num1 / num2;
//             } else {
//                 result = "Cannot divide by zero";
//             }
//             break;
//         default:
//             result = "Invalid operator";
//     }
    
//     return result;
// }

// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");

// // Call the function with the input values
// var result = calculate(num1, num2, operator);

// document.write(`<h2>Result: ${num1} ${operator} ${num2} = ${result}</h2>`);



// 5.
// function square(number) {
//     return number * number;
// }

// var num = 5;
// var squaredNum = square(num);
// console.log(`The square of ${num} is: ${squaredNum}`);


// 6.
// function factorial(number) {
//     // Base case: factorial of 0 is 1
//     if (number === 0) {
//         return 1;
//     }
    
//     else {
//         return number * factorial(number - 1);
//     }
// }

// var num = 5;
// var result = factorial(num);
// console.log(`The factorial of ${num} is: ${result}`);


// 7.
// function countNumbers(start, end) {
//     // Validate inputs: ensure start and end are integers
//     start = parseInt(start);
//     end = parseInt(end);

//     if (isNaN(start) || isNaN(end)) {
//         document.write("<p>Invalid input. Please enter valid integers.</p>");
//         return;
//     }

//     document.write("<h2>Counting Sequence:</h2>");
//     if (start <= end) {
//         for (var i = start; i <= end; i++) {
//             document.write(i + "<br>");
//         }
//     } else {
//         for (var i = start; i >= end; i--) {
//             document.write(i + "<br>");
//         }
//     }
// }

// var startNum = prompt("Enter the start number:");
// var endNum = prompt("Enter the end number:");

// // Call the function with the input values
// countNumbers(startNum, endNum);



// 8.
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }
    
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
    
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
    
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
    
//     // Return the hypotenuse
//     return hypotenuse;
// }

// var baseLength = parseFloat(prompt("Enter the base length of the triangle:"));
// var perpendicularLength = parseFloat(prompt("Enter the perpendicular length of the triangle:"));
// var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);

// console.log(`The hypotenuse of the right-angle triangle is: ${hypotenuse}`);



// 9.
// Function to calculate area with arguments passed as values
// function calculateAreaWithValue(width, height) {
//     return width * height;
// }

// var width = 5;
// var height = 10;
// var area1 = calculateAreaWithValue(width, height);

// console.log(`Area with arguments as values: ${area1}`);



// // Function to calculate area with arguments passed as variables
// function calculateAreaWithVariables() {
//     var width = arguments[0];
//     var height = arguments[1];
//     return width * height;
// }

// var widthVar = 7;
// var heightVar = 12;
// var area2 = calculateAreaWithVariables(widthVar, heightVar);

// console.log(`Area with arguments as variables: ${area2}`);

// 10.
// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     var cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// var inputString = prompt("Enter a string to check for palindrome:");

// if (isPalindrome(inputString)) {
//     console.log(`"${inputString}" is a palindrome.`);
// } else {
//     console.log(`"${inputString}" is not a palindrome.`);
// }



// 11.
// function capitalizeWords(str) {
//     var words = str.split(' ');

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }

//     var capitalizedString = words.join(' ');

//     return capitalizedString;
// }

// var exampleString = 'the quick brown fox';
// var capitalizedOutput = capitalizeWords(exampleString);

// console.log(`Original String: '${exampleString}'`);
// console.log(`Capitalized Output: '${capitalizedOutput}'`);


// 12.

// function findLongestWord(str) {
//     var words = str.split(' ');

//     var longestWord = '';
//     var maxLength = 0;

//     for (var i = 0; i < words.length; i++) {
//         var currentWord = words[i].replace(/[\W_]/g, '');
        
//         if (currentWord.length > maxLength) {
//             maxLength = currentWord.length;
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }
// var exampleString = 'Web Development Tutorial';
// var longestWord = findLongestWord(exampleString);

// console.log(`Example String: '${exampleString}'`);
// console.log(`Longest Word: '${longestWord}'`);


// 13.
// function countOccurrences(str, letter) {
//     var lowerCaseStr = str.toLowerCase();
//     var lowerCaseLetter = letter.toLowerCase();

//     var count = 0;

//     for (var i = 0; i < lowerCaseStr.length; i++) {
//         if (lowerCaseStr[i] === lowerCaseLetter) {
//             count++;
//         }
//     }

//     return count;
// }

// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';

// var occurrences = countOccurrences(inputString, letterToCount);
// console.log(`Number of occurrences of '${letterToCount}' in '${inputString}': ${occurrences}`);



// 14.
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    
    return `The circumference is ${circumference.toFixed(2)}`;
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    
    return `The area is ${area.toFixed(2)}`;
}

var radius = 5;

var circumferenceResult = calcCircumference(radius);
console.log(circumferenceResult);

var areaResult = calcArea(radius);
console.log(areaResult);