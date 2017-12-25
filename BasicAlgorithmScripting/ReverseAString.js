function reverseString(str) {
    var arr = str.split("");
    arr.reverse();
    return arr.join("");
  }
  
console.log(reverseString("hello"));
  