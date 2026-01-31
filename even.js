/**
 * create a function that will return only the even numbers
 * return the sum of even numbers
*/

// function everNumbers(numbers) {
//     const evenNumbers = [];
//     for(const number of numbers){
//         if(number%2===0){
//             evenNumbers.push(number);
//         }
//     }
//     return evenNumbers;
// }

const numbs = [1,2,3,4,5,6];
// const evenNumbs = everNumbers(numbs);
// console.log(evenNumbs);


function sumOfEvenNumbs(numbers){
    let sum = 0;
    for(const number of numbers) {
        if(number%2===0){
            sum+=number;
        }
    }
    return sum;
}

const sumOfEvens = sumOfEvenNumbs(numbs);
console.log(sumOfEvens);
