function findLongestWord(str) {
    var max = 0;
    var len = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i] == " ") {
            if (len > max)
                max = len;
            len = 0;
            continue;
        }
        len++;
    }

    if (len > max)
        max = len;

    return max;
}

console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));