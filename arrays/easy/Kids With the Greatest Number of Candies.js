var kidsWithCandies = function(candies, extraCandies) {
    let maxCandiesHave = Math.max(...candies)
    console.log(maxCandiesHave)
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