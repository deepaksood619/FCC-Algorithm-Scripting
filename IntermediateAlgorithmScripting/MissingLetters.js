function fearNotLetter(str) {

    let start = str.charCodeAt(0);
    let missingLetter;

    

    for (let i = 1; i < str.length; i++) {
        start++;
        if (str.charCodeAt(i) != start) {
            console.log('break');
            missingLetter = String.fromCharCode(start);
            break;
        }
    }

    return missingLetter;
}

console.log(fearNotLetter("abce"));