// var smallestRangeI = function(nums, k) {
//     let min = Math.min(...nums) 
//     let max = Math.max(...nums)

//     // if ((max -k) - (min + k) < 0) {
//     //     return 0
//     // }
//     // else{
//         return (max - k) - (min + k) 
//     // }
// };


// console.log(smallestRangeI([2, 3, 4, 5, 6], 5))


// function mindiff(params) {
//     let diff = Infinity
//     for (let i = 0; i < params.length; i++) {
//       for (let j = i + 1; j < params.length; j++) {
//         if (Math.abs(params[i] - params[j]) < diff) {
//             diff = Math.abs(params[i] - params[j])
//         }
//         // console.log(Math.abs(params[i] - params[j]))
        
//       }
        
//     }
//     return diff
// }

function findMinDiff(arr)
    {
      
        arr.sort(function(a, b)
        {return a - b});
          
       
        let diff = Infinity;
      
        for (let i = 0; i < arr.length - 1; i++)
            if (arr[i + 1] - arr[i] < diff)
                diff = arr[i + 1] - arr[i];
       
        return diff;
    }

let arr = [1, 7, 8, 65]

console.log(findMinDiff(arr))