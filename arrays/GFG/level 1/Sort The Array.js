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

    for (let i = 0; i < n; i++) {
        if (Math.sign(arr[i] - arr[i + 1]) == 1) {
            let temp = arr[i + 1]
            arr[i + 1] = arr[i]
            arr[i] = temp
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






