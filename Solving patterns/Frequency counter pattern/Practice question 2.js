
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 


//...................using frequency counter method..............................

function areThereDuplicates(arg) {

    let lookup = {}

    for (let i = 0; i < arg.length; i++) {
        if (lookup.hasOwnProperty(arg[i])) {
            lookup[arg[i]] = lookup[arg[i]] + 1
        }

        else {
            lookup[arg[i]] = 1
        }

    }

    console.log(lookup)

    for (let key in lookup) {
        if (lookup[key] > 1) {
            return true
        }
    }

    return false

}

console.log(areThereDuplicates(['b', 'c', 'a']))


console.log(".............using multiple pointers..............")


function areThereDuplicates2(arr2) {

    let arr = arr2.sort();  // sorting array in ascending order
    let left = 0;
    let right = 1

    while (right < arr.length) {
        if (arr[left] === arr[right]) {
            return true
        }

        else {
            left++
            right++
        }

    }

    return false

}

console.log(areThereDuplicates2([1, 2, 3, 9, 8]))







