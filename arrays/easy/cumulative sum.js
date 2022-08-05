// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.


function addArr(arr) {

    let arr2 = []

    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp = temp + arr[i];
        arr2.push(temp)
    }
    return arr2
}

console.log(addArr([1, -1, -1, -1, 1]))
