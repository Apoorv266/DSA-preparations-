function valueEqualToIndex(arr) {
    for (let i = 1; i <= arr.length ; i++) {
        if (arr[i] === i) {
            return i 
        }
    }
    return -1
}
console.log(valueEqualToIndex([15, 2, 45, 12, 7])
)