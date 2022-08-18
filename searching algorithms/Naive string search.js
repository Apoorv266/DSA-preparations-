function stringSearch(str1, str2) {
    let count = 0
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str2[j] !== str1[i + j]) {
                break
            }
            // if the shorter string is checked completely then it means all the string items matches in the bigger string
           if (j === str2.length - 1) {
             count++
           }
        }
    }
    return count
}

console.log(stringSearch("wowomgzomg", "omg"))