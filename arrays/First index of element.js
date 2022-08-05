function first_index(arr , ele){

    let value = -1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
        value = i
        break
    }
    
}
return value

}

console.log(first_index([1, 4 ,3 ,8, 3 ,32 ,24 ,1 ,23 ,8], 8))






































