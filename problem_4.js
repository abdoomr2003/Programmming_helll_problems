/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let unique = 0;
    nums.forEach((num) => {
        unique ^= num;
    })
    return unique;
};
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
