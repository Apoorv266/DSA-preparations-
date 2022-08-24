var shortestToChar = function (s, c) {
    let arr = []
    let arr2 = []
    for (let i = 0; i < s.length; i++) {

        if (s[i] === c) {
            arr.push(i)
        }
    }
    let min = 1000000;

    for (let j = 0; j < s.length; j++) {
        for (let x = 0; x < arr.length; x++) {

            if (Math.abs(arr[x] - j) <= min) {
                min = Math.abs(arr[x] - j);
            }
        }
        arr2.push(min);
        min = 1000000;
    }
    return arr2
};

console.log(shortestToChar("abcdpd", "d"))


// second approach 

var shortestToChar = function (s, c) {
    let output = []

    for (let i = 0; i < s.length; i++) {
        let item = findDistance(i, s, c)
        output.push(item)
    }
    return output

    function findDistance(i, s, c) {
        if (s[i] === c) {
            return 0
        }

        let j = 1
        while (j >= 0 || j < s.length) {
            if (s[i - j] === c || s[i + j] === c) {
                return j
            }
            j++
        }
    }
}





// function findsmall(params) {
//     let val = Infinity
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] < val) {
//             val = params[i]
//         }

//     }
//     return val
// }

// console.log(findsmall([3, 76, 53, 2]))


