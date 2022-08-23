var uniqueOccurrences = function(arr) {
    let arr2 = Array.from(new Set(arr))
    let i = 0
    let counter = 0
    while (i < arr2.length) {
        let temp = 0
        for (let j = 0; j < arr.length; j++) {
           if (arr2[i] === arr[j] ) {
            temp++
           }
        }
        if (counter === temp) {
            counter = temp
        }
        i++
    }
    return counter
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))