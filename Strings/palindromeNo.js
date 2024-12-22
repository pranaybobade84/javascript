function isPalindrome(num) {
  if (num < 0) {
    console.log("Number cannot be less than 0");
  }

  return num === +num.toString().split("").reverse().join("");
}

console.log(isPalindrome(11)); //returns true
console.log(isPalindrome(10)); //returns false
