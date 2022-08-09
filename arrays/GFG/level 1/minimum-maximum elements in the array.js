// Your task is to find the minimum and maximum elements in the array.

function getMinMax(arr, n) {
    let minmax = [];
    arr = arr.sort(function (a, b) { return a - b });

    /*If there is only one element then return it as min and max both*/
    if (n === 1) {
        minmax[0] = arr[0]
        minmax[1] = arr[0]
        return minmax;
    }

    // for finding minimum value
    for (let j = 0; j < n; j++) {
        if (arr[j] < arr[j + 1]) {
            minmax[0] = arr[j]
            break
        }

    }
    // for finding maximum value
    for (let i = n; i >= 0; i--) {
        if (arr[i - 1] < arr[i]) {
            minmax[1] = arr[i]
            break
        }
    }

    return minmax
}

console.log(getMinMax([3, 2, 1, 56, 1000, 167], 6))

