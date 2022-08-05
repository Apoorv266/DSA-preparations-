// function example(arr, ele){

//     let temp = 0
//     if (arr.includes(ele) === true) {
//         temp = arr.lastIndexOf(ele)
//     }
//     else {
//         temp = -1
//     }

//     return temp
// }     

function example(arr, ele){
    let last = -1;

    for (let i = arr.length; i > 0; i--) {
        if (arr[i] === ele) {
            last = i;
            break
        }
    }

    return last
}



console.log(example([1 ,4 ,3 ,8 ,3 ,32 ,24, 1 ,23, 8], 8))

