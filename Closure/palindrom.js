function createPalindromeChecker() {
    return function (str) {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanedStr === cleanedStr.split('').reverse().join('');
    };
}

const isPalindrome = createPalindromeChecker();
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
console.log(isPalindrome('hello')); // Output: false
