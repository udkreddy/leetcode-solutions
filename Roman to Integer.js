/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romans = ['I','V', 'X', 'L', 'C', 'D', 'M'];
    let romanEquivalent = [1, 5, 10, 50, 100, 500, 1000];
    let num = 0;
    if(s.length == 1) {
        return romanEquivalent[romans.indexOf(s)];
    }
    for(i = 0;i<s.length-1;i++) {
        let val = s[i]
        let romanIndex = romans.indexOf(val)
        let tempNum =  romanEquivalent[romanIndex];
        if(romans.indexOf(val) < romans.indexOf(s[i+1])) {
            tempNum = tempNum*-1
        } else {
            tempNum = tempNum*1
        }
        num += tempNum
    }
    num +=romanEquivalent[romans.indexOf(s[s.length-1])];
    return num
};
