var nums = process.argv.slice(2);
var sum = 0;

for (var i=0; i<nums.length; i++) {

    sum += Number(nums[i]);
}

console.log(sum);