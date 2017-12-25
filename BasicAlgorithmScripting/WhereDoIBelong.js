function getIndexToIns(arr, num) {
    // Find my place in this sorted array.

    arr.sort(function(a, b) {
        return a - b;
    });

    var index = 0;

    for (index = 0; index < arr.length; index++) {
        if (arr[index] >= num) {
            return index;
        }
    }

    return index;
}

console.log(getIndexToIns([2, 5, 10], 15));