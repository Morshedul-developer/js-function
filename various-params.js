/* For a given string tell me whether it has even number of characters or not */

// function isEven(str) {
//     if(str.length % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(isEven('Hello'));
// console.log(isEven('Hello.'));


function isEven(arr) {
    if(arr.length % 2 === 0) {
        return true;
    }
    return false;
}

// console.log(isEven([1,2,3,4,5]));
console.log(isEven([1,2,3,4,5,6]));