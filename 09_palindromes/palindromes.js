const palindromes = function (text) {
const regex = /[A-Z]/gi;
const forwards = text.toLowerCase().match(regex).join("");
const backwards = text.toLowerCase().match(regex).reverse().join("");
return forwards === backwards;    
};
// Do not edit below this line
module.exports = palindromes;
