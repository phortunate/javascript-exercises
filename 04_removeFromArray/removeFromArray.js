const removeFromArray = function(array, ...elements){
    return array.filter(item => !elements.includes(item));
    
};
removeFromArray([1,2,3,4], 2);
// Do not edit below this line
module.exports = removeFromArray;
