var firstPalindrome = function (words) {

    //loop over each value of array words
    for (let i = 0; i < words.length; i++) {
        // pass each value to seperate function for a palindrome check
        if (checkpalims(words[i]) === true) {
            return words[i] // if palindrome check function returns true then return that particular item from words array
        }
    }
    return ""
};

function checkpalims(words) {
    // create two pointers ---> one from beginning and other from end
    let left = 0
    let right = words.length - 1
    while (left < right) {
        // if character from beginning does not matches character from end then return false
        if (words[left] !== words[right]) {
            return false
        }
        left++
        right--
    }
    // otherwise return true
    return true
}

console.log(firstPalindrome(["xngla","e","itrn","y","s","pfp","rfd"]))




