
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)


function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;

    if (!str1) return true;


    while (j < str2.length) {

        if (str2[j] === str1[i]) { // to check the index of characeters in string 1 is equal in string 2
            i++;
        }

       if (i === str1.length) {  // to check if all the characters are present in the string 
            return true;
        }

        j++;
        // only if the characters in string 1 is present in string 2 the i will increase...in other words i === str1.length only when all the characters are present in string 2

        
    }
    return false;
}


console.log(isSubsequence('sing', 'sting'));


  
