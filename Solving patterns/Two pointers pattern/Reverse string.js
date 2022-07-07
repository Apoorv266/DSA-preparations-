// Write a function that reverses a string. The input string is given as an array of characters s.


var reverseString = function(s) {
    console.log(s)
   let start = 0;
   let end = s.length - 1
 
   while (start < end) {
// swapping last element with first
    let temp = s[end]
    s[end] = s[start]
    s[start] = temp

    start++
    end--
   }

     console.log(s)
};


reverseString(["H","a","n","n","a","h"])

// swap 2 numbers

// let a = 1
// let b = 2
// let temp = a
// a = b
// b = temp

// console.log("b", b , "a" , a) 