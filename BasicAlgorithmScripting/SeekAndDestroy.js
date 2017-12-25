function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);

    var exclude = args.slice(1, args.length);

    var cleanVals = arr.filter(function(val) {
        return !(exclude.includes(val));
    });

    return cleanVals;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));