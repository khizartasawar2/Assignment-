// 1. Write a js program to find cube of any number using function.

function cube(num) {
    // Return the number multiplied by itself three times (cube)
    return num * num * num;
}
  // Example usage:
    const number = 5;
    const result = cube(number);
    console.log(`The cube of ${number} is ${result}`); 


// 2. Write a js program to find diameter, circumference and area of circle using functions.

// Function to calculate the diameter of a circle
function calculateDiameter(radius) {
    return 2 * radius;
}

// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Function to calculate the area of a circle
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// Sample usage
let radius = 5;
console.log("For a circle with radius " + radius + ":");
console.log("Diameter: " + calculateDiameter(radius));
console.log("Circumference: " + calculateCircumference(radius));
console.log("Area: " + calculateArea(radius));

// 3. Write a js program to find maximum and minimum between two numbers using functions.

// Function to find the maximum between two numbers
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Function to find the minimum between two numbers
function findMinimum(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

// Sample usage
let number1 = 10;
let number2 = 20;
console.log("Between " + number1 + " and " + number2 + ":");
console.log("Maximum: " + findMaximum(number1, number2));
console.log("Minimum: " + findMinimum(number1, number2));

// 4. Write a js program to check whether a number is even or odd using functions.

// Function to check whether a number is even or odd
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Sample usage
let number = 7;
console.log("The number " + number + " is " + isEvenOrOdd(number) + ".");

number = 10;
console.log("The number " + number + " is " + isEvenOrOdd(number) + ".");

// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

// Function to check whether a number is prime
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Function to check whether a number is an Armstrong number
function isArmstrong(number) {
    let sum = 0;
    let temp = number;
    const numDigits = number.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}

// Function to check whether a number is a perfect number
function isPerfect(number) {
    if (number <= 0) return false;
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) sum += i;
    }
    return sum === number;
}

// Sample usage
let number = 28;
console.log("The number " + number + " is prime: " + isPrime(number));
console.log("The number " + number + " is Armstrong: " + isArmstrong(number));
console.log("The number " + number + " is perfect: " + isPerfect(number));

number = 153;
console.log("The number " + number + " is prime: " + isPrime(number));
console.log("The number " + number + " is Armstrong: " + isArmstrong(number));
console.log("The number " + number + " is perfect: " + isPerfect(number));

number = 7;
console.log("The number " + number + " is prime: " + isPrime(number));
console.log("The number " + number + " is Armstrong: " + isArmstrong(number));
console.log("The number " + number + " is perfect: " + isPerfect(number));


// 6. Write a js program to find all prime numbers between given interval using functions.


// Function to check whether a number is prime
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// Function to find all prime numbers in a given interval
function findPrimesInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Sample usage
let start = 10;
let end = 50;
let primes = findPrimesInRange(start, end);
console.log("Prime numbers between " + start + " and " + end + ": " + primes.join(", "));


// 7. Write a js program to print all strong numbers between given interval using functions.

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to check whether a number is a strong number
function isStrongNumber(number) {
    let sum = 0;
    let temp = number;
    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}

// Function to find all strong numbers in a given interval
function findStrongNumbersInRange(start, end) {
    let strongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isStrongNumber(i)) {
            strongNumbers.push(i);
        }
    }
    return strongNumbers;
}

// Sample usage
let start = 1;
let end = 500;
let strongNumbers = findStrongNumbersInRange(start, end);
console.log("Strong numbers between " + start + " and " + end + ": " + strongNumbers.join(", "));


// 8. Write a js program to print all Armstrong numbers between given interval using functions.


// Function to check whether a number is an Armstrong number
function isArmstrong(number) {
    let sum = 0;
    let temp = number;
    const numDigits = number.toString().length;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }
    return sum === number;
}

// Function to find all Armstrong numbers in a given interval
function findArmstrongNumbersInRange(start, end) {
    let armstrongNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isArmstrong(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

// Sample usage
let start = 1;
let end = 1000;
let armstrongNumbers = findArmstrongNumbersInRange(start, end);
console.log("Armstrong numbers between " + start + " and " + end + ": " + armstrongNumbers.join(", "));


// 9. Write a js program to print all perfect numbers between given interval using functions.


// Function to check whether a number is a perfect number
function isPerfect(number) {
    if (number <= 1) return false;
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

// Function to find all perfect numbers in a given interval
function findPerfectNumbersInRange(start, end) {
    let perfectNumbers = [];
    for (let i = start; i <= end; i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}

// Sample usage
let start = 1;
let end = 10000;
let perfectNumbers = findPerfectNumbersInRange(start, end);
console.log("Perfect numbers between " + start + " and " + end + ": " + perfectNumbers.join(", "));


// 10. Write a js program to find power of any number using function.


// Function to calculate the power of a number
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Sample usage
let base = 2;
let exponent = 3;
console.log(base + " raised to the power of " + exponent + " is " + power(base, exponent));

base = 5;
exponent = 4;
console.log(base + " raised to the power of " + exponent + " is " + power(base, exponent));


// 11. Write a js program to print all natural numbers between 1 to n using function.


// Function to print all natural numbers between 1 and n
function printNaturalNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// Sample usage
let n = 10;
console.log("Natural numbers between 1 and " + n + ":");
printNaturalNumbers(n);

n = 20;
console.log("Natural numbers between 1 and " + n + ":");
printNaturalNumbers(n);


// 12. Write a js program to print all even or odd numbers in given range using function.

// Function to print all even or odd numbers in a given range
function printEvenOrOddNumbers(start, end, isEven) {
    for (let i = start; i <= end; i++) {
        if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0)) {
            console.log(i);
        }
    }
}

// Sample usage
let start = 1;
let end = 20;
console.log("Even numbers between " + start + " and " + end + ":");
printEvenOrOddNumbers(start, end, true);

console.log("\nOdd numbers between " + start + " and " + end + ":");
printEvenOrOddNumbers(start, end, false);


// 13. Write a js program to find sum of all natural numbers between 1 to n using function.


// Function to find the sum of all natural numbers between 1 and n
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Sample usage
let n = 10;
console.log("Sum of natural numbers between 1 and " + n + ": " + sumOfNaturalNumbers(n));

n = 20;
console.log("Sum of natural numbers between 1 and " + n + ": " + sumOfNaturalNumbers(n));


// 14. Write a js program to find sum of all even or odd numbers in given range using function.



// Function to find the sum of all even or odd numbers in a given range
function sumEvenOrOddNumbersInRange(start, end, isEven) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0)) {
            sum += i;
        }
    }
    return sum;
}

// Sample usage
let start = 1;
let end = 10;
console.log("Sum of even numbers between " + start + " and " + end + ": " + sumEvenOrOddNumbersInRange(start, end, true));

console.log("Sum of odd numbers between " + start + " and " + end + ": " + sumEvenOrOddNumbersInRange(start, end, false));


// 15. Write a js program to find reverse of any number using function.


// Function to find the reverse of a number
function reverseNumber(number) {
    let reversedNumber = 0;
    while (number > 0) {
        let digit = number % 10;
        reversedNumber = (reversedNumber * 10) + digit;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}

// Sample usage
let number = 12345;
console.log("Original number: " + number);
console.log("Reverse of the number: " + reverseNumber(number));

number = 987654321;
console.log("\nOriginal number: " + number);
console.log("Reverse of the number: " + reverseNumber(number));


// 16. Write a js program to check whether a number is palindrome or not using function.


// Function to check whether a number is palindrome or not
function isPalindrome(number) {
    // Convert number to string to easily manipulate individual digits
    let numString = number.toString();
    // Get the length of the string
    let len = numString.length;

    // Iterate through the string from both ends towards the middle
    for (let i = 0; i < len / 2; i++) {
        // Compare characters at opposite ends of the string
        if (numString[i] !== numString[len - 1 - i]) {
            // If characters don't match, it's not a palindrome
            return false;
        }
    }
    // If all characters match, it's a palindrome
    return true;
}

// Sample usage
let number = 12321;
console.log(number + " is a palindrome: " + isPalindrome(number));

number = 12345;
console.log(number + " is a palindrome: " + isPalindrome(number));


// 17. Write a js program to find sum of digits of a given number using function.

// Function to find the sum of digits of a number
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        // Extract the last digit of the number
        let digit = number % 10;
        // Add the digit to the sum
        sum += digit;
        // Remove the last digit from the number
        number = Math.floor(number / 10);
    }
    return sum;
}

// Sample usage
let number = 12345;
console.log("Number: " + number);
console.log("Sum of digits: " + sumOfDigits(number));

number = 9876;
console.log("\nNumber: " + number);
console.log("Sum of digits: " + sumOfDigits(number));


// 18. Write a js program to find factorial of any number using function.


// Function to find the factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

// Sample usage
let number = 5;
console.log("Factorial of " + number + " is: " + factorial(number));

number = 0;
console.log("Factorial of " + number + " is: " + factorial(number));

number = 10;
console.log("Factorial of " + number + " is: " + factorial(number));


// 19. Write a js program to generate nth Fibonacci term using function.


// Function to generate the nth Fibonacci term
function fibonacci(n) {
    // Base cases: Fibonacci(0) = 0, Fibonacci(1) = 1
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Initialize variables for the first two Fibonacci numbers
    let prev = 0;
    let curr = 1;

    // Generate the nth Fibonacci term
    for (let i = 2; i <= n; i++) {
        // Calculate the next Fibonacci number by adding the previous two
        let next = prev + curr;
        // Update prev and curr for the next iteration
        prev = curr;
        curr = next;
    }

    // Return the nth Fibonacci term
    return curr;
}

// Sample usage
let n = 10;
console.log("The " + n + "th Fibonacci term is: " + fibonacci(n));

n = 20;
console.log("The " + n + "th Fibonacci term is: " + fibonacci(n));


// 20. Write a js program to find GCD (HCF) of two numbers using function.

function gcd(a, b) {
    // Handle base case: if b is 0, then GCD is a
    if (b === 0) {
        return a;
    }
    // Recursive call: GCD(b, a % b) - find GCD of b and remainder of a divided by b
    return gcd(b, a % b);
}
  // Example usage
    const num1 = 48;
    const num2 = 18;
    const hcf = gcd(num1, num2);
    console.log(`The GCD (HCF) of ${num1} and ${num2} is: ${hcf}`);


    // 21. Write a js program to find LCM of two numbers using function.

    function gcd(a, b) {
        // Implement Euclidean algorithm to find GCD (refer to previous explanation)
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
        }
        function lcm(num1, num2) {
        // LCM = (num1 * num2) / GCD(num1, num2)
        const hcf = gcd(num1, num2);
        return (num1 * num2) / hcf;
        }
      // Example usage
    const number1 = 12;
    const number2 = 15;      
        const lcmValue = lcm(number1, number2);
        console.log(`The LCM of ${number1} and ${number2} is: ${lcmValue}`);


        // 22. Write a js program to display all array elements using function.

        function displayArrayElements(arr) {
            // Loop through each element in the array
            for (let i = 0; i < arr.length; i++) {
                console.log(arr[i]);
            }
            }
          // Example usage
            const myArray = ["apple", "banana", 10, true];
            displayArrayElements(myArray);

        //   23. Write a js program to find sum of elements of array using function.


// Function 1: Using a for loop
function sumWithForLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
  // Function 2: Using forEach loop
    function sumWithForEach(arr) {
    let sum = 0;
    arr.forEach(element => {
                sum += element;
    });
    return sum;
}

  // Function 3: Using reduce method (ES6+)
function sumWithReduce(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
  // Example usage
const numbers = [2, 5, 8, 1];

const sum1 = sumWithForLoop(numbers);
const sum2 = sumWithForEach(numbers);
const sum3 = sumWithReduce(numbers);

console.log(`Sum using for loop: ${sum1}`);
console.log(`Sum using forEach: ${sum2}`);
console.log(`Sum using reduce: ${sum3}`);


// 24. Write a js program to find maximum and minimum elements in array using function.

function findMinMax(arr) {
    // Handle empty array case
    if (arr.length === 0) {
        return { min: null, max: null };
    }
    // Initialize min and max with the first element
    let min = arr[0];
    let max = arr[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (current < min) {
        min = current;
        } else if (current > max) {
        max = current;
        }
    }

    // Return an object with min and max values
    return { min, max };
}

  // Example usage
const numbers = [5, 12, -3, 8, 0];

const { min, max } = findMinMax(numbers);

console.log(`Minimum element: ${min}`);
console.log(`Maximum element: ${max}`);

