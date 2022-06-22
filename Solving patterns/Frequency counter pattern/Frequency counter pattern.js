// check the anagram of the string with other string using 

let str1 = "anagram"
let str2 = "nagaramp"


console.log(checkAnam(str1, str2))
function checkAnam(str1, str2) {
    let lookup = {}
    for (let i = 0; i < str1.length; i++) {
        if (lookup.hasOwnProperty(str1[i])) {
            lookup[str1[i]] += 1
        }

        else {
            lookup[str1[i]] = 1
            console.log(lookup[str1[i]])
        }
    }
    console.log(lookup)

    for (let j = 0; j < str2.length; j++) {
        // console.log(str2[j])
        if (lookup.hasOwnProperty(str2[j])) {
            lookup[str2[j]]  = lookup[str2[j]] - 1 ;
          
        }
        else{
            lookup[str2[j]] = 1
            // return false
        }
    }
    return lookup
}
