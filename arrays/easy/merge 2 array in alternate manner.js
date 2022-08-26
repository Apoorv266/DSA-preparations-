function merge(arr1, arr2) {
    let arr3 = []

    if (arr2.length > arr1.length) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1[i]) {
                arr3.push(arr1[i])
            }
            arr3.push(arr2[i])
        }
    }

    if (arr2.length < arr1.length) {
        for (let i = 0; i < arr1.length; i++) {
            arr3.push(arr1[i])
            if (arr2[i]) {
                arr3.push(arr2[i])
            }
        }
    }
    return arr3
}




let arr1 = [1, 2, 3, 4, 5]
let arr2 = [11, 22, 33, 44]

console.log(merge(arr1, arr2))





