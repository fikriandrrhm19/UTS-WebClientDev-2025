export function checkPalindrome(str) {
    const rev = str.split("").reverse().join("");
    return rev === str;
}