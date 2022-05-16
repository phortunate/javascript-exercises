const sumAll = function(num1, num2) {
    let startNumber = num1;
    let endNumber = num2;
    let sum = 0;

    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 > num2) {
        startNumber = num2;
        endNumber = num1;
    }
    
    for (let i = startNumber; i <= endNumber; i++) {
        sum += i;
    }
    return sum;
};
sumAll("test", "e", 4)
// Do not edit below this line
module.exports = sumAll;
