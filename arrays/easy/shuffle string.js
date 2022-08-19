var restoreString = function (s, indices) {
    let str = []
    let i = 0 // to remove double for loop we created seperate i as we want i to be only 0

    // for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < indices.length; j++) {
        str[indices[j]] = s[i + j]
        // i++
    }
    // break
    // }
    return str.join("")
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]))
