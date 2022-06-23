
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 



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








console.log(areThereDuplicates([1, 2, 3]))
