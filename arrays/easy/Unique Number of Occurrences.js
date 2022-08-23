var uniqueOccurrences = function(arr) {
    let obj = {};
    let newArr = [];
    for(let num of arr){
        obj[num] ? obj[num]++ : obj[num] = 1;
    }
    
    console.log(obj)
    for(let num in obj){
      if(newArr.includes(obj[num])) return false
      else newArr.push(obj[num]);
      console.log(newArr)
  }
    return true;
};

console.log(uniqueOccurrences([1, 2, 4]))