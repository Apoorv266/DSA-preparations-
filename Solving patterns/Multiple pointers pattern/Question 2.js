
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)


function isSubsequence(str1, str2) {
    console.log(str1.length)
    var i = 0;
    var j = 0;

    if (!str1) return "str not present";


    while (j < str2.length) {

        if (str2[j] === str1[i]) {
            i++;
        }

        else if (i === str1.length) {
            return true;
        }

        else {
            j++;
        }
    }
    return false;
}


console.log(isSubsequence('bcd', 'abcdef'));


