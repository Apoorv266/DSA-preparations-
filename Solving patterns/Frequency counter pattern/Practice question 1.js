// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// eg if 2 is apprearing for 2 times in both 

function sameFrequency(int1, int2) {
    let arr1 = int1.toString();
    let arr2 = int2.toString();

    let lookup = {}
    let lookup2 = {}


    for (let i = 0; i < arr1.length; i++) {
        if (lookup.hasOwnProperty([arr1[i]])) {
            lookup[arr1[i]] = lookup[arr1[i]] + 1
        }

        else {
            lookup[arr1[i]] = 1
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (lookup2.hasOwnProperty([arr2[j]])) {
            lookup2[arr2[j]] = lookup2[arr2[j]] + 1
        }

        console.log(lookup2)

        for (const key in lookup) {

            if (lookup[key] !== lookup2[key]) {
                return false
            }

            else {
                return true
            }

        }
    }
};

console.log(sameFrequency(3589578, 5879385))