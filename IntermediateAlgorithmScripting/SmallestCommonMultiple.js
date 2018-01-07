function smallestCommons(arr) {
    let ans = 0;

    if (arr[0] < arr[1]) {
        ans = lcm (arr[0], arr[1]);
    } else {
        ans = lcm (arr[1], arr[0]);
    }

    return ans;
}

function lcm (l, r) {
    ans = l;
    for (let i = l+1; i <= r; i++) {
        ans = (i*ans) / (gcd(i, ans));
    }
    return ans;
}

function gcd(a, b) {
    if (b == 0)
        return a;
    return gcd (b, a%b);
}


console.log(smallestCommons([5, 1]));