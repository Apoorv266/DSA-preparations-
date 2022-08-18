var kidsWithCandies = function(candies, extraCandies) {
    let maxCandiesHave = Math.max(...candies) // we find the maximum item in array candies
   
    let output = []
    for(let i = 0; i < candies.length; i++){
      if((candies[i] + extraCandies) >= maxCandiesHave){
          output.push(true)
      } else {
          output.push(false)
      }
    }
    return output
};

console.log(kidsWithCandies( [12,1,12], 10))