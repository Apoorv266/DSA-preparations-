
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.


//................................naive solution............................

function averagePair(arr, avg) {
    // console.log(avg)
    // console.log(arr)
    let avg2 = avg + avg
    // console.log("avg2 ->", avg2)

    if (arr.length) {
        console.log(false)
    }

    else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {

                if (arr[i] + arr[j] === avg2) {
                    console.log(arr[i], arr[j])
                }

            }

        }
    }
}

averagePair([1, 2, 3], 2.5)