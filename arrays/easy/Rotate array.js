// rotate an array to left by k steps
function rotate(arr , k){

    
for (let j = 0; j < k; j++) {
   
    for (let i = 0; i < arr.length; i++) {
       if (i === 0) {
         arr.push(arr[i])
       } 
    }
    arr.shift()
}

return arr

}

console.log(rotate([1,3,6, 11, 12, 17],1))





