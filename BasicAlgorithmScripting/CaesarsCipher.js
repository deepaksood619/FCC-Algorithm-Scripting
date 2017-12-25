function rot13(str) { // LBH QVQ VG!

    decryptedString = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            var c = String.fromCharCode((code - 65 + 13) % 26 + 65);
            decryptedString += c;
        } else {
            decryptedString += str[i];
        }
    }

    return decryptedString;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));