function largestOfFour(arr) {
    
    var largest = [];

    for (var outerIndex in arr) {
        var max = 0
        for (var innerIndex in arr[outerIndex]) {
            if (arr[outerIndex][innerIndex] > max) {
                max = arr[outerIndex][innerIndex];
            }
        }
        largest.push(max);
    }

    return largest;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));