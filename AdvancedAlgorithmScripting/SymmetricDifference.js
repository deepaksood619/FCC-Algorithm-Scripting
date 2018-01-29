function sym(args) {
    var argsArr = Array.prototype.slice.call(arguments);

    var mergeArr = [];
    for (var i = 0; i < argsArr.length; i++) {
        mergeArr = mergeArr.concat(Array.from(new Set(argsArr[i])));
    }

    dict = {};
    for (var i = 0; i < mergeArr.length; i++) {
        if (dict.hasOwnProperty(mergeArr[i])) {
            dict[mergeArr[i]] = dict[mergeArr[i]] + 1;
        } else {
            dict[mergeArr[i]] = 1;
        }
    }

    var result = [];
    for (var key in dict) {
        if (dict[key] % 2 == 1) {
            result.push(parseInt(key));
        }
    }

    return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
