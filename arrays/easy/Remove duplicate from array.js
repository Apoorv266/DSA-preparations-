


function Dupli(arr) {
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
        arr2.push(arr[i])
    }
   
  }

  return arr2
}

console.log(Dupli(['A', 'B', 'A', 'C', 'B']))