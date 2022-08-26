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


let arr1 = [1, 2, 3, 4,5, 6, 7]
let arr2 = [11, 22, 33, 44]

console.log(merge(arr1, arr2))

//-----------or--------------


function alternateMerge(arr1, arr2) {
    let arr3 = []
    let i = 0, j = 0, k = 0;

    // Traverse both array till equal value
    while (i < arr1.length && j < arr2.length) {
        arr3[k++] = arr1[i++];
        arr3[k++] = arr2[j++];
    }

    // Store remaining elements of first array
    while (i < arr1.length)
        arr3[k++] = arr1[i++];

    // Store remaining elements of second array
    while (j < arr2.length)
        arr3[k++] = arr2[j++];

        return arr3
}

console.log(alternateMerge(arr1, arr2)
)



