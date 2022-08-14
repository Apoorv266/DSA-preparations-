// Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative element.


// function segregateElements(arr, n) {
//     let arrPositive=[];

//     let arrNegitive = [];

//     for(let i=0;i<n;i++){
//         if(arr[i]>0){
//             arrPositive.push(arr[i]);
//         }else{
//             arrNegitive.push(arr[i]);
//         }
//     }

//     for(let i=0;i<arrPositive.length;i++){
//         arr[i] = arrPositive[i]
//     }
//     console.log("arr" ,arr)
//     for(let i=0;i<arrNegitive.length;i++){
//          arr[arrPositive.length+i] = arrNegitive[i]
//     }

//     console.log(arrPositive)

//     console.log(arrNegitive)

//    return arr
// }


function segregateElements(arr, n) {
    let temp
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] < 0) {
            temp = arr[i]
        let temp2 = arr[i + 1]
        // arr[]
        }

    }
}

console.log(segregateElements([-1, -2, 4, 5], 4))