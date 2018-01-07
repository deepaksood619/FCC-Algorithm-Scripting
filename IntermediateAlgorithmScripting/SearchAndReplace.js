function myReplace(str, before, after) {

    if (before[0] == before[0].toUpperCase()) {
        after = after[0].toUpperCase() + after.slice(1,after.length);
    }

    str = str.replace(before, after);

    return str;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));