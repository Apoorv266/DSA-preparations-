var threeConsecutiveOdds = function(arr) {
  
   for (let i = 1; i <= arr.length - 2; i++) {
   
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i - 1] % 2 !== 0) {
        return true
    }
    
   }
   return false
};

console.log(threeConsecutiveOdds([1, 1, 1]))
