/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const parses = s.split(' ');
    const reverses = parses.map((word) => word.split('').reverse().join(''));
    return reverses.join(' ');
};
console.log(reverseWords("s'teL ekat edoCteeL tsetnoc"));
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("rM gniD"));
console.log(reverseWords("Mr Ding"));
