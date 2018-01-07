function steamrollArray(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
      }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));