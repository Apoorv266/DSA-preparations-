function addArr(arr1, arr2) {
    let i = arr1.length - 1
    let j =  arr2.length - 1
    let ans = []
    let carry = 0

    while (i >= 0 && j >= 0) {
        let val1 = arr1[i];
        let val2 = arr2[j];
       let sum = val1 + val2 + carry;  
        carry = parseInt(sum / 10)
        sum = sum % 10
        ans.push(sum)
        i--
        j--
    }

    while (i >= 0) {
        let sum = arr1[i] + carry;  
        carry = parseInt(sum / 10)
        sum = sum % 10
        ans.push(sum)
        i--
    }

    while (j >= 0) {
        let sum = arr2[j] + carry;  
        carry = parseInt(sum / 10)
        sum = sum % 10
        ans.push(sum)
        j--
    }

    while(carry != 0) {
        let sum = carry;
        carry = parseInt(sum/10);
        sum = sum%10;
        ans.push(sum);
    }
    return ans.reverse()
}

console.log(addArr([9, 9],[9, 9, 9]))

let a = 1
// let b = 1
// let c = a + b
console.log(parseInt(a / 10))