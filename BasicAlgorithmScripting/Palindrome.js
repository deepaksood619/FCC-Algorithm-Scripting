function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]*/g, "");

    console.log(str);

    var start = 0;
    var end = str.length - 1;

    while (start < end) {
        if (str[start] != str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(palindrome("1 eye for of 1 eye."));