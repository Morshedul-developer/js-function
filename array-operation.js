/**
 * Write a function to give me the sum of all numbers in an array
*/

function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        sum+=number;
    }
    return sum;
}

const numbs = [1,2,3,4,5];
const sum = sumOfNumbers(numbs);
console.log(sum);