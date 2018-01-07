function dropElements(arr, func) {
    // Drop them elements.

    let index = 0;
    let flag = false;

    while (!flag && index < arr.length) {
        if (func(arr[index])) {
            flag = true;
            break;
        }
        index++;
    }

    if (flag) {
        return arr.slice(index, arr.length);
    }
    return [];
}

console.log(dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
}));