function example(arr, ele){

    let temp = 0
    if (arr.includes(ele) === true) {
        temp = arr.lastIndexOf(ele)
    }
    else {
        temp = -1
    }

    return temp
}     




console.log(example([1 ,4 ,3 ,8 ,3 ,32 ,24, 1 ,23 ,8], 23))

