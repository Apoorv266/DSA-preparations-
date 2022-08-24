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




function findsmall(params) {
    let val = Infinity
    for (let i = 0; i < params.length; i++) {
        if (params[i] < val) {
            val = params[i]
        }

    }
    return val
}

console.log(findsmall([3, 76, 53, 2]))
