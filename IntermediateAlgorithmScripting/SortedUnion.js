function uniteUnique(arr) {
    arr = Array.from(arguments);
    arr = arr.reduce(function(a, b) {
        b = b.filter(function (el) {
            return !a.includes(el)
        });
        return a.concat(b);
    });
    return arr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));