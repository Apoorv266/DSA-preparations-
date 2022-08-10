// Given a random set of numbers, Print them in sorted order.

// function sortArr(n, arr) {
//     var done = false
//     while (!done) {
//         done = true;
//         for (let i = 0; i < n; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 done = false
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp;
//             }
//         }
//     }
//     return arr
// }


function sortArr(n, arr) {
    let i = 0
    let j = n - 1

    while (j >= i) {
        if (Math.sign(arr[i] - arr[j]) == 1) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        j--
        
        if (i === j) {
            i++
        }
    }


    return arr
}
console.log(sortArr(4, [5, 4, 1, 2]))


// accepted - brute force

// function sortArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//           if (arr[i] > arr[j]) {
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//           }
//         }
//       }
//       return arr
// }






