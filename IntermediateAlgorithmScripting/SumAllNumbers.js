function sumAll(arr) {

    if (arr[0] == arr[1]) {
        return arr[0];
    }

    var min = 0;
    var max = 0;

    if (arr[0] < arr[1]) {
        min = arr[0];
        max = arr[1];
    } else {
        min = arr[1];
        max = arr[0];
    }

    var sum = 0;
    for (var i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));