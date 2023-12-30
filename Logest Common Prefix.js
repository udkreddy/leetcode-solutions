/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let prefix = strs[0];
    for(let i = 1;i<strs.length;i++) {
        const str = strs[i];
        if(!str.length) prefix = '';
        for(let j = 0;j<str.length;j++) {
            if(prefix[j]!=str[j]) {
                prefix = prefix.slice(0,j);
                break;
            } else if(j == str.length-1 || j==prefix.length-1) prefix = prefix.slice(0,j+1);
        }
    }
    return prefix;
};
