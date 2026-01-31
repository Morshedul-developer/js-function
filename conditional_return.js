function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}

const result1 = isEven(4);



function isOdd(number) {
    if(number % 2 === 1) {
        return true;
    }
    return false;
}

const result2 = isOdd(4);


console.log(result1, result2);