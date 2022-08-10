// Given a random set of numbers, Print them in sorted order.

// bubble sort 

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

// accepted - two pointer approach

function sortArr(n, arr) {
    let i = 0
    let j = n - 1
    while (i <= j) {
        if (Math.sign(arr[i] - arr[j]) == 1) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        if (i === j) {
            i++
            j = n 
        } 
        j--
    }
    return arr
}
console.log(sortArr(6, [100, 23, 43, 64, 12, 3]))


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



