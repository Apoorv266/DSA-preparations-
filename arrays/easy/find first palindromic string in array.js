var firstPalindrome = function (words) {
    let left = 0
    let right = words.length - 1
    let counter = 0


    while (left <= right) {
        if (words[left] === words[right]) {
            counter++
            console.log(words[left])
        }
        left++
        right--
    }
    if (counter > 0) {
        console.log(counter)
        return words
    }
    return ""
};


console.log(firstPalindrome("e"))


console.log("------------")

var firstPalindrome = function (words) {

    for (let i = 0; i < words.length; i++) {
        let left = 0
        let right = words[i].length - 1
        // let counter = 0

        while (left <= right) {
            if (words[i][left] === words[i][right]) {
                return words[i]
            }
            left++
            right--
        }
        // if (counter !== 0) {
            
        // }
    }
    return ""
};

console.log(firstPalindrome(["abc","e","ada","racecar","cool"]))


// let a = ["abc","car","ada","racecar","cool"]
// console.log(a[0][1])



