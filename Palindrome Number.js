/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let count = countDigit(x)
    // console.log(count)
    if(count == 1) return true
    return getDigits(x, count)
};

var getDigits = function(num, count) {
    // let count = 1;
    let mid = 0;
    if(count%2 == 0) mid = count/2
    else mid = Math.floor(count/2) + 1
    
    let arr = []
    while(arr.length != count) {
        arr.push(num%10);
        // console.log(arr)
        num = Math.trunc(num/10);
        // console.log(num)
        if(arr.length > mid){
            // console.log(arr)
            if(count%2==1) {
                if(arr[mid- (arr.length-mid) - 1 ] != arr[arr.length-1]) return false;
            } else {
                // console.log(arr[arr.length-mid-1])
                // console.log(arr[arr.length-1])
                if(arr[mid-(arr.length-mid)] != arr[arr.length-1]) return false;
            }
            // if(arr[arr.length-1] != arr[mid-(arr.length-1 - mid)]){
            //     return false;
            // }
        }
        // count++;
    }
    // arr.push(num);
    return true;
}

var countDigit = function(num) {
    if(num == 0) return 1
    return Math.floor(Math.log10(num) + 1)
}
