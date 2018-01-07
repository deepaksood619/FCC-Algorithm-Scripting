function translatePigLatin(str) {

    if (str[0].match(/[aeiou]/g)) {
        str = str + "way";
    } else {
        var i = 1;
        while (true) {
            if (str[i].match(/[aeiou]/g)) {
                str = str.slice(i, str.length) + str.slice(0, i) + 'ay';
                break;
            }
            i++;
        }
    }

    return str;
}

console.log(translatePigLatin("consonant"));