var isPalindrome = function(x) {
    let palindrome = false;
    if (Math.sign(x) === -1) {
        palindrome = false 
    } else {
        const reverse = parseInt(x.toString().split("").reverse().join(""))
        if (reverse === x) {
            palindrome = true 
        }
    }
    return palindrome
}


console.log(isPalindrome(121))