/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sortNums = JSON.parse(JSON.stringify(nums))
    sortNums = sortNums.sort(function(a, b){return a-b})
    let numLen = nums.length;
    while(sortNums[sortNums.length-1]+sortNums[0] < target) {
        let removedElement = sortNums.shift();
        nums = removeAtIndex(nums, removedElement);
    }
    while(sortNums[sortNums.length-1]+sortNums[0] > target) {
        let removedElement = sortNums.pop();
        nums = removeAtIndex(nums, removedElement);
    }
    // console.log(nums)
    for(let i = 0;i<numLen-1;i++) {
        let a = nums[i];
        if(a!='a')
            for(let j = i+1;j<numLen;j++) {
                let b = nums[j];
                if(b!='a')
                    if(b+a == target) {
                        return [i,j]
                    }
            }
    }
};

var removeAtIndex = function(arr, element) {
    let ind = arr.indexOf(element)
    while(ind >-1 ) {
        arr[ind] = 'a'
        ind = arr.indexOf(element)
    }
    return arr;
}
