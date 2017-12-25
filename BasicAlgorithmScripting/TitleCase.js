function titleCase(str) {

    str = str.toLowerCase();
    arr = str.split(" ");

    for (count in arr) {
        arr[count] = arr[count][0].toUpperCase() + arr[count].slice(1, arr[count].length);
    }

    str = arr.join(" ");

    return str;
}

console.log(titleCase("I'm a little tea pot"));