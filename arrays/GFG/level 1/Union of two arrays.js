// Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.

function doUnion(a, b) {

    b.map((item) =>{
        if (!a.includes(item)) {
            a.push(item)
        }
    })
    return [...new Set(a)].length
}

// or

function doUnion(a, n, b, m){
    let oneArr = [...a,...b]
    return [...new Set(oneArr)].length
}

console.log(doUnion([85, 25, 1, 32, 54, 6, 85], [85, 2]))