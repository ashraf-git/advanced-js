const nums = [1, 2, 3, -45,5,5,-56,-58];
for (let i = 0; i < nums.length; i++) {
    
    if (nums[i]> 50) {
        break;
    }
    console.log(nums[i]);
    
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i]< 0) {
        break;
    }
    console.log(nums[i]);
}