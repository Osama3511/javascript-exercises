const reverseString = function(string) {
    let reveresedString = '';
    let length = string.length;
    for (let i = length - 1 ; i >= 0 ; i--){
        reveresedString += string[i];
    }
    return reveresedString;
};

// Do not edit below this line
module.exports = reverseString;
