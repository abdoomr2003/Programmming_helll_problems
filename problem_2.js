/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 & x !== 0) ) {
        return false
    }
    const reverse = Number(x.toString()
    .split('')
    .reverse()
    .join(''));
    return reverse === x;



};
console.log(isPalindrome(-153));
console.log(isPalindrome(153));
console.log(isPalindrome(131));
