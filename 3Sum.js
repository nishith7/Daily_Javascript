/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let a = 0 - nums[i];
      let low = i + 1;
      let high = nums.length - 1;
      while (low < high) {
        if (nums[low] + nums[high] === a) {
          res.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          
          while (low < high && nums[high] === nums[high - 1]) high--;

          low++;
          high--;

        } else if (nums[low] + nums[high] < a) low++; 
          else high--;
      }
    }
  }
  return res;
};
