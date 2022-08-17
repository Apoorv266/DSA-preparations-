function binarysearch(array, num) {
    let min = 0
    let max = array.length - 1

    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2)
        if (array[midIndex] < num) {
            min = midIndex + 1
        }
        else if (array[midIndex] > num) {
            max = midIndex - 1
        }
        else if (array[midIndex] === num) {
            return midIndex
        }
    }
    return -1;
}

console.log(binarysearch([2, 4, 3, 5, 36, 7, 2, 4, 6], 36))