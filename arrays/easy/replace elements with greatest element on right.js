// var replaceElements = function (arr) {   
//     for (let i = 0; i < arr.length ; i++) {
//         let temp = 0
//         for (let j = i + 1; j < arr.length ; j++) {
//             if (arr[j] > temp) {
//                     temp  = arr[j]
//                 }
//             }
//             arr[i] = temp
            
//             arr[i] = Math.max(...arr.slice(i + 1));
//         }
        
//         arr[arr.length - 1] = -1
//     return arr
// };

// or

// var replaceElements = function (arr) {   
//     for (let i = 0; i < arr.length ; i++) {  
//             arr[i] = Math.max(...arr.slice(i + 1));  
//     }
//         arr[arr.length - 1] = -1
//     return arr
// };

//or


// var replaceElements = function(arr) {
    
//     let max = -1;
//     for(let i =arr.length -1; i>=0; i--) {
//         const temp = max;
//         max = Math.max(arr[i], max);
//         arr[i] = temp;
//     }
//     return arr
// };

var replaceElements = function(arr) {
    
        let max = -1;
        for(let i =0 ; i <= arr.length; i++) {
            const temp = max;
            max = Math.max(arr[i], max);
            arr[i] = temp;
        }
        return arr
    };

console.log(replaceElements([17, 6, 5, 4, 18, 1]))