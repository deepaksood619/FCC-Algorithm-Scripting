function sumFibs(num) {

    let a = 1;
    let b = 1;
    let sum = 0;
    if (b <= num) {
        sum = 1;
    }

    while (b <=4) {
        if (b%2 != 0) {
            sum += b;
        }
        b = b+a;
        a = b-a;
    }

    return sum;
}

console.log(sumFibs(4));