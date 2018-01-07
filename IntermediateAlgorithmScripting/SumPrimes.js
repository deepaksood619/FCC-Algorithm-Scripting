function sumPrimes(num) {

    // using sieve of erasthones
    let arr = new Array(num+1).fill(true);

    let sum = 0;

    for (let i = 2; i <= num; i++) {
        if (arr[i]) {
            sum += i;
            for (let j = i+i; j <= num; j += i) {
                arr[j] = false;
            }
        }
    }

    return sum;
}

console.log(sumPrimes(10));