// Given an unsorted array arr[] of size N having both negative and positive integers. The task is place all negative element at the end of array without changing the order of positive element and negative element.


function segregateElements(arr, n) {
    let arrPositive=[];

    let arrNegitive = [];

    for(let i=0;i<n;i++){
        if(arr[i]>0){
            arrPositive.push(arr[i]);
        }else{
            arrNegitive.push(arr[i]);
        }
    }

    for(let i=0;i<arrPositive.length;i++){
        arr[i] = arrPositive[i]
    }
    console.log("arr" ,arr)
    for(let i=0;i<arrNegitive.length;i++){
         arr[arrPositive.length+i] = arrNegitive[i]
    }

    console.log(arrPositive)

    console.log(arrNegitive)

   return arr
}


function segregateElements(arr, n) {
    // Create an empty array to store result
    let temp = new Array(n);

    // Traversal array and store +ve element in
    // temp array
    let j = 0; // index of temp
    for (let i = 0; i < n; i++)
        if (arr[i] >= 0)
            temp[j++] = arr[i];

    // If array contains all positive or all negative.
    if (j == n || j == 0)
        return;

    // Store -ve element in temp array
    for (let i = 0; i < n; i++)
        if (arr[i] < 0)
            temp[j++] = arr[i];

    for (let i = 0; i < n; i++) arr[i] = temp[i];
    return arr
}

console.log(segregateElements([-2, -3, 4, 5], 4))


