function repeatStringNumTimes(str, num) {
    
    if (num < 1) {
        return "";
    }

    var concatStr = "";

    for (var i = 0; i < num; i++) {
        concatStr += str;
    }

    return concatStr;
}

console.log(repeatStringNumTimes("abc", 3));