
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.


//................................naive solution............................

// function averagePair(arr, avg) {

//     let avg2 = avg + avg


//     if (arr.length == 0) {
//         console.log(false)
//     }

//     else {
//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length; j++) {

//                 if (arr[i] + arr[j] === avg2) {
//                     console.log(arr[i], arr[j])
//                 }

//             }

//         }
//     }
// }

// averagePair([1,2, 3, 5, 1, 4], 2.5)



//.........................two pointer method...................................

function averagePair(arr, avg) {

    let left = 0;
    let plus = 1;
    let avg2 = avg + avg

    // if (arr.length == 0) {
    //     console.log(false)
    // }

    // else {

    while (plus < arr.length) {
        if (arr[left] + arr[plus] == avg2) {
            return true
        }

        else {
            left++
            plus++
        }
    }

    return false
    // }
}

console.log(averagePair([1, 3, 3, 5, 6, 10, 7, 12, 19], 8))




