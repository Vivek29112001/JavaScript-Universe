function maxSumArray(){
    return function maxi(nums){
        let maxSum=nums[0], currentSum=nums[0];
        for(let i=1; i<nums.length;i++){
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum= Math.max(maxSum,currentSum);
        }
        return maxSum;
    }
}
const maS = maxSumArray();
console.log(maS([1,2,3,-5,7]))


function maxArray(nums){
    let maxSum =nums[0], currentSum =nums[0];
    for(let i=1; i<nums.length;i++){
        currentSum= Math.max(nums[i], currentSum + nums[i]);
        maxSum=Math.max(maxSum,currentSum);
    }
    return maxSum;
}
console.log(maxArray([1,2,3,-5,7]))