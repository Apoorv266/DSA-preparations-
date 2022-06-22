// create a program that calculate maximum sum of n consecutive elements in array
// let arr = [1, 2, 3]


function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = 0 ;

    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            // console.log("j", j)
            temp += arr[i + j];
        }
          console.log(max, temp)
          if (temp > max) {
            max = temp;
          }
        }
        return max;
    }


console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

let arr = [4, 2, 1, 6, 2]

console.log(arr[0 - 4])


console.log("........with sliding window approach.........")



function MaxSumArray(arr, num){
let tempNum = 0
let maxNum = 0

for (let i = 0; i < num; i++) {
   maxNum += arr[i]
}

tempNum = maxNum

for (let j = num; j < arr.length; j++) {
    tempNum = tempNum - arr[j - num] + arr[j]  //- arr[j - num] ->accessing num number of elements before current element starting from num
    if (tempNum > maxNum) {
        maxNum = tempNum;
      }
    }
    return maxNum;
}

console.log(MaxSumArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

let arr1 = [2, 6, 9, 2, 1, 8, 5, 6, 3]
// assuming num = 3 and hence j starts at 3
console.log("arr1", arr1[3 - 3]) // 2 (at [0])
console.log("current element", arr1[3]) // 2 (at [3])