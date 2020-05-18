function checkPalindrome(string) {
    return string === string.split('').reverse().join('');
}