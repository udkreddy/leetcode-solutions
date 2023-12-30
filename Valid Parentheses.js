/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openBracks = ['(','[','{'];
    let active = [];
    let map = {'(':')','[':']','{':'}'};
    if(s.length ==0 || s.length%2 == 1)return false;
    for(let i = 0;i<s.length;i++) {
        if(openBracks.indexOf(s[i])>-1) active.push(map[s[i]]);
        else
            if(s[i] != active[active.length-1]) return false;
            else active.pop();
    }
    if(active.length) return false;
    return true;
};
