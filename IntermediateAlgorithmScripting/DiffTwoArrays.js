function diffArray(arr1, arr2) {
    var newArr = [];
    
    newArr = newArr.concat(arr1.filter(function(value) {
        if(arr2.indexOf(value) == -1) {
            return true;
        }
        return false;
    }));

    newArr = newArr.concat(arr2.filter(function(value) {
        if(arr1.indexOf(value) >= 0) {
            return false;
        }
        return true;
    }));

    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));