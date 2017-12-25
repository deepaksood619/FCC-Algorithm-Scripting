function confirmEnding(str, target) {
    var strEndPointer = str.length - 1;

    for (var i = target.length - 1, j = 0; i >= 0; i--, j++) {
        if (str[strEndPointer - j] != target[i]) {
            return false;
        }
    }

    return true;
}

console.log(confirmEnding("Bastian", "ian"));