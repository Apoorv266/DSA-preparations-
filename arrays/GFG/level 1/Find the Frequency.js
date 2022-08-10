function findFrequency(v, n, x) {
    let count = 0
    if (v.includes(x)) {
        for (let i = 0; i < n; i++) {
            if (v[i] === x) {
                count++
            }
        }
    }
    return count

}

console.log(findFrequency([2, 5, 2, 2, 44], 5, 2))