export function checkPalindrome(str: string): boolean {
    const rev: string = str.split("").reverse().join("");
    return rev === str;
}