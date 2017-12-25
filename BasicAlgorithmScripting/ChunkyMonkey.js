function chunkArrayInGroups(arr, size) {
    
    var twoDimArr = []

    var numOfGroups = Math.floor(arr.length / size);

    for (var i = 0; i < numOfGroups; i++) {
        var temp = arr.slice(i*size, i*size + size);
        twoDimArr.push(temp);
    }

    var temp = arr.slice(numOfGroups*size, arr.length);
    if (temp.length > 0)
        twoDimArr.push(temp);

    return twoDimArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));