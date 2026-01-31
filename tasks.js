//* Task-1
// Take four parameters. Multiply the four numbers and then return the result

// solution

// function multiplication(a,b,c,d) {
//     const result = a*b*c*d;
//     return result;
// }

// console.log(multiplication(1,2,3,4));

//* Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// solution

// function evenOdd(number) {
//   if (number % 2 === 1) {
//     const result = number * 2;
//     return result;
//   }
//   else{
//     const result = number / 2;
//     return result;
//   }
// }

// console.log(evenOdd(3));

//* Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// solution

// function make_avg(numbers,length) {
//     let sum = 0;
//     for(const number of numbers) {
//         sum+=number;
//     }
//     const avg = sum / length;
//     return avg;
// }

// const numbs = [1,2,3,4,5,6];
// const average = make_avg(numbs,numbs.length);
// console.log(average);

//* Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// solution

// function count_zero(str) {
//     let sum = 0;
//     for(let i=0; i<str.length; i++) {
//         if(str[i] === '0'){
//             sum++;
//         }
//     }
//     return sum;
// }

// const str = '0100';
// const str1 = '01000010110010';

// const result = count_zero(str1);
// console.log(result);