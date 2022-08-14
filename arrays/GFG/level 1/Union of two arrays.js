// Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

function doUnion(a, b) {


    // for (let j = 0; j < b.length; j++) {
    //     if (!a.includes(b[j])) {
    //         a.push(b[j])
    //     }
    // }

    b.map((item) =>{
        if (!a.includes(item)) {
            a.push(item)
        }
    })
    return a
}

console.log(doUnion([85, 25, 1, 32, 54, 6, 85], [85, 2]))